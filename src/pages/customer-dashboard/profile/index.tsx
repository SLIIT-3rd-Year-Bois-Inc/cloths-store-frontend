import React, { useEffect, useRef, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { CustomerAPI } from "../../customer/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toDateOnly } from "../../../utils/date-time";
import { ImagePicker } from "../../../components/customer-dashboard/image-picker";
import { useAuth } from "../../../hooks/auth";

const updateSchema = yup.object().shape({
  f_name: yup.string().max(255).required("First Name is required"),
  l_name: yup.string().max(255).required("Last Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  dob: yup.date().required("Date of Birth is required"),
  image: yup.string(),
});

export function Profile() {
  useAuth();
  const { register, handleSubmit, setValue, getValues, reset, formState } =
    useForm({
      resolver: yupResolver(updateSchema),
    });
  const [image, setImage] = useState("");

  const profile_query = useQuery("profile", CustomerAPI.me, {
    onSuccess: (data) => {
      data.dob = toDateOnly(new Date(data.dob));
      reset(data);
      setImage(data.image);
    },
  });

  const queryClient = useQueryClient();

  const update = useMutation(CustomerAPI.updateMe, {
    onSuccess: () => {
      queryClient.invalidateQueries("profile");
    },
  });

  return (
    <>
      <h1 className="font-bold text-2xl mb-6">Profile</h1>
      <div className="w-100 flex-grow max-w-[60em] bg-white px-12">
        <form
          onSubmit={handleSubmit((data) => {
            data.image = image;
            update.mutate(data);
          })}
          className="mb-4"
        >
          <div className="flex flex-row justify-center items-center w-full pb-8">
            <ImagePicker
              currentImage={image}
              setImage={(im) => {
                setValue("image", im);
                setImage(im);
              }}
            />
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col flex-grow">
              <label htmlFor="f_name">First Name</label>
              <EditableInput
                id="f_name"
                type="text"
                placeholder="First Name"
                {...register("f_name")}
              />
            </div>
            <div className="flex flex-col flex-grow">
              <label htmlFor="l_name">Last Name</label>
              <EditableInput
                id="l_name"
                type="text"
                placeholder="Last Name"
                {...register("l_name")}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <EditableInput
              id="email"
              type="text"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <div>
            <label htmlFor="bday">Birthday</label>
            <EditableInput
              id="bday"
              type="date"
              placeholder="Date"
              {...register("dob")}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <button
              type="submit"
              className="rounded bg-black text-white hover:bg-white hover:text-black px-10 py-3 text-sm shadow-lg"
            >
              Update
            </button>
            <div className="text-red-400 font-bold mt-2">
              {update.isLoading && "Please wait."}
              {update.isSuccess && "Success!"}
              {update.isError && "Update was not success. Please try again."}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

interface EditableInputProps extends React.HTMLProps<HTMLInputElement> {}

const EditableInput = React.forwardRef<HTMLInputElement, EditableInputProps>(
  ({ className, ...rest }: EditableInputProps, input_ref) => {
    const [disable, setDisable] = useState(true);
    const input = useRef<any>(input_ref);

    const focus = () => {
      /* setTimeout(() => {
      if (input.current) {
        input.current.focus();
        input.current.select();
      }
    }, 100); */
    };

    return (
      <div className={`flex flex-row justify-center items-center ${className}`}>
        <input
          {...rest}
          ref={input_ref}
          className={`rounded w-full ${
            disable ? "border-0 bg-transparent" : ""
          }`}
          disabled={disable}
        ></input>
        <FiEdit2
          className="p-2 bg-gray-300 rounded-full mx-3 hover:bg-gray-400 cursor-pointer"
          size={32}
          onClick={() => {
            setDisable((prev) => {
              return !prev;
            });
            focus();
          }}
        />
      </div>
    );
  }
);
