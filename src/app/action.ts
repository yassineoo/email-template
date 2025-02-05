"use server";

export async function submitForm(prevState: any, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const fileNumber = formData.get("fileNumber");
  const file = formData.get("file") as File;

  // Here you would typically process the file and send the email
  // For this example, we'll just log the data and return a success message

  console.log("Form data:", { name, email, fileNumber, fileName: file.name });

  // Simulate sending an email
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return "Form submitted successfully!";
}
