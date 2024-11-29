'use server';

export async function handleSubmit(formData: FormData) {
  console.log(Object.fromEntries(formData));
}
