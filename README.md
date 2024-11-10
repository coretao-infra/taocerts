# Next.js Project Documentation  

This Next.js project provides endpoints for generating certificates for various events and courses. The application allows customization through URL parameters and component props.  

---  

## Required `.env` file

```yaml
AZURE_STORAGE_ACCOUNT_NAME=saucefdevtaocerts
AZURE_STORAGE_ACCOUNT_KEY=""
AZURE_TABLE_NAME=test
```

## Endpoints  

The application exposes the following endpoints:  

1. **`/certificate`** - For Virtual Summits.  
2. **`/teamone`** - For TeamOne Workshops.  
3. **`/cloudfirst`** - For CloudFirst related courses.  

---  

## URL Parameters  

The endpoints accept the following URL query parameters:  

- **`course`** *(Optional)*: Represents the name of the table used to fetch data. If not provided, it defaults to `test` table.  

- **`id`** *(Required)*: The `RowKey` of the element in the table. This is used to fetch specific user data.  

**Example Usage:**  

```url  
/certificate?id=12345&course=virtualSummit2023  
```  

---  

## Component Props  

The `certificate` component can be customized using the following props:  

```typescript  
type Props = {  
  user: UserType,  
  logo1?: string,  
  logo2?: string,  
  bgImage?: string,  
  bgSize?: number[],  
  type?: string,  
  squared?: boolean,  
}  
```  

### Props Description  

- **`user`** *(Required)*: An object of type `UserType` containing user data.  

- **`logo1`** *(Optional)*: The path to the upper logo image. The image file must be located in the `public` folder. If set to an empty string `""`, the upper logo will not be displayed.  

- **`logo2`** *(Optional)*: The path to the lower logo image. The image file must be located in the `public` folder. If set to an empty string `""`, the lower logo will not be displayed.  

- **`bgImage`** *(Optional)*: The path to the background image. This allows you to customize the background of the certificate.  

- **`bgSize`** *(Optional)*: An array of two numbers `[width, height]` defining the background size in pixels. Use this if you want to specify the background dimensions explicitly.  

- **`type`** *(Optional)*: A string value displayed next to "Team One" in the header. This allows you to specify the type of event or course.  

- **`squared`** *(Optional)*: A boolean value. If set to `true`, the upper logo (`logo1`) will be displayed within a white square background, enhancing its visibility against the main background.  

---  

## Usage Examples  

### Using the Endpoint  

To generate a certificate for a user, make a GET request to one of the endpoints with the required parameters.  

**Example for Virtual Summit Certificate:**  

```url  
/certificate?id=12345&course=virtualSummit2023  
```  

**Example for TeamOne Workshop Certificate:**  

```url  
/teamone?id=67890&course=teamOneWorkshop2023  
```  

### Customizing the Certificate Component  

When integrating the certificate component into your Next.js application, you can customize it using the component props.  

**Example:**  

```jsx  
import CertificateComponent from '../components/CertificateComponent';  
   
const CertificatePage = () => {  
  
  return (  
    <Certificate  
      user={user}  
      logo1="/images/logo1.png"  
      logo2="/images/logo2.png"  
      bgImage="/images/certificate-bg.png"  
      bgSize={[1920, 1080]}  
      type="Advanced Training"  
      squared={true}  
    />  
  );  
};  
   
export default CertificatePage;  
```  

---  

## Notes  

- **Image Paths**: All image paths (`logo1`, `logo2`, `bgImage`) must refer to files located in the `public` folder of your Next.js project.  

- **Logo Visibility**: If `logo1` or `logo2` are set to an empty string `""`, the respective logo will not be displayed on the certificate.  

- **Background Size (`bgSize`)**: Use this prop if you need to define specific dimensions for the background image. If not provided, the background image will use its default size.  

- **Header Type (`type`)**: The `type` prop allows you to specify additional text next to "Team One" in the certificate header, such as the specific course or event name.  

- **Squared Logo**: Setting `squared` to `true` places the upper logo (`logo1`) within a white square background. This is useful if the logo requires a contrasting background to stand out.  

---  

## Getting Started  

Follow these steps to get the project up and running on your local machine.  

### Prerequisites  

- **Node.js** (v14 or higher)  
- **npm** or **yarn**  

### Installation  

1. **Clone the Repository**  
  
   ```bash  
   git clone https://github.com/your-repo/your-project.git  
   ```  

2. **Navigate to the Project Directory**  
  
   ```bash  
   cd your-project  
   ```  

3. **Install Dependencies**  
  
   Using npm:  
  
   ```bash  
   npm install  
   ```  
  
   Or using yarn:  
  
   ```bash  
   yarn install  
   ```  

### Running the Development Server  

Start the development server with the following command:  

Using npm:  

```bash  
npm run dev  
```  

Or using yarn:  

```bash  
yarn dev  
```  

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.  

---  

## Project Structure  

Brief overview of the project structure:  

- **`pages/`**: Contains the Next.js pages corresponding to the endpoints.  
- **`components/`**: Contains the React components used in the application.  
- **`public/`**: Contains static assets such as images and logos.  

---  

## Contributing  

We welcome contributions to improve this project!  

1. **Fork the Repository**  

2. **Create a Feature Branch**  
  
   ```bash  
   git checkout -b feature-name  
   ```  

3. **Commit Your Changes**  
  
   ```bash  
   git commit -m "Your detailed description of the changes."  
   ```  

4. **Push to Your Branch**  
  
   ```bash  
   git push origin feature-name  
   ```  

5. **Open a Pull Request**  

---  

## License  

This project is licensed under the [MIT License](LICENSE).  

---  

## Contact  

For any questions or feedback, please reach out to:  

- **Email**: [your-email@example.com](mailto:your-email@example.com)  
- **GitHub**: [your-github-profile](https://github.com/your-github-profile)  

---  

**Thank you for using our Next.js certificate generation application!**
