import { TableClient, AzureNamedKeyCredential } from "@azure/data-tables";
import { NextResponse } from 'next/server';
import { unstable_noStore as noStore } from 'next/cache';

export async function GET(request) {
    noStore();
    // Get const course for course parameter
    const searchParams = request.nextUrl.searchParams;
    const course = searchParams.get('course');

    const account = process.env.AZURE_STORAGE_ACCOUNT_NAME;
    const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY;
    const tableName = process.env.AZURE_TABLE_NAME;

    console.log("AZURE_STORAGE_ACCOUNT_NAME:", account);
    console.log("AZURE_TABLE_NAME:", tableName);
    // console.log("AZURE_STORAGE_ACCOUNT_KEY:", accountKey);

    const tableNameNew = course ? course : tableName;

    const credential = new AzureNamedKeyCredential(account, accountKey);
    const client = new TableClient(
        `https://${account}.table.core.windows.net`,
        tableNameNew,
        credential
    );

    try {
        const entities = client.listEntities();
        const results = [];

        for await (const entity of entities) {
            results.push(entity);
        }

        return NextResponse.json(results);
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
    }
}