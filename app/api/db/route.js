import { TableClient, AzureNamedKeyCredential } from "@azure/data-tables";
import { NextResponse } from 'next/server';
import { unstable_noStore as noStore } from 'next/cache';

export async function GET() {
    noStore();
    const account = process.env.AZURE_STORAGE_ACCOUNT_NAME;
    const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY;
    const tableName = process.env.AZURE_TABLE_NAME;

    const credential = new AzureNamedKeyCredential(account, accountKey);
    const client = new TableClient(
        `https://${account}.table.core.windows.net`,
        tableName,
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

export const runtime = "edge";