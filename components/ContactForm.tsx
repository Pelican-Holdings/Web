import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    // try {
    //   const response = await emailjs.send<FormData, EmailJSResponseStatus>(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     data,
    //     "YOUR_USER_ID"
    //   );
    //   console.log("Email sent successfully:", response);
    // } catch (error) {
    //   console.error("Error sending email:", error);
    // }
  };

  const handleBlur = (fieldName: keyof FormData) => {
    // Clear the error for the field when the user starts typing
    clearErrors(fieldName);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        // className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md"
        // className="px-8 mt-8 p-6 bg-white"
        className="px-8 mt-4 md:mt-8 p-6"
      >
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Contact Us
        </h1>

        <div className="flex flex-col">
          <div className="flex flex-row gap-4 md:gap-12">
            <div className="mb-4 basis-1/2">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                onBlur={() => handleBlur("name")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors?.name && (
                <p className="text-red-500 text-xs italic">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="mb-4 basis-1/2">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                onBlur={() => handleBlur("name")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors?.email && (
                <p className="text-red-500 text-xs italic">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-row gap-4 md:gap-12">
            <div className="mb-4 basis-1/2">
              <label
                htmlFor="subject"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject", { required: "Subject is required" })}
                onBlur={() => handleBlur("name")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors?.subject && (
                <p className="text-red-500 text-xs italic">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div className="mb-4 basis-1/2">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone", { required: "Phone is required" })}
                onBlur={() => handleBlur("name")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors?.phone && (
                <p className="text-red-500 text-xs italic">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-row">
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                onBlur={() => handleBlur("name")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors?.message && (
                <p className="text-red-500 text-xs italic">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-main text-white hover:text-main rounded-md hover:bg-white border-2 hover:border-main text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
