import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { serverTimestamp } from "firebase/firestore";

interface PostProps {
  onclick?: () => void;
  onclose: () => void;
}

const CreatePost = (props: PostProps) => {
  const [user] = useAuthState(auth);

  const titleRef = useRef<HTMLInputElement>(null);
  const salaryRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLSelectElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const createPost = async () => {
    // Ensure that user and titleRef.current are not null before proceeding
    if (
      user &&
      titleRef.current &&
      salaryRef.current &&
      locationRef.current &&
      contactRef.current &&
      descriptionRef.current &&
      locationRef.current.value != "Which aimag?" &&
      titleRef.current.value != "" &&
      salaryRef.current.value != "" &&
      contactRef.current.value != "" &&
      descriptionRef.current.value != ""
    ) {
      const docRef = await addDoc(collection(db, "posts"), {
        email: user.email, // It's safe to access user.email directly since we checked user is not null
        timestamp: serverTimestamp(),
        title: titleRef.current.value,
        salary: salaryRef.current.value,
        location: locationRef.current.value,
        contact: contactRef.current.value,
        description: descriptionRef.current.value,
      });
      props.onclose();
      // Optionally, handle the docRef if needed, e.g., to show a success message or reset form fields
    } else {
      // Handle the case where one of the refs is null or user is not authenticated
      console.error("Form is incomplete or user is not authenticated.");
    }
  };

  const style = "pt-3 font-spartan text-background-10 text-left regular-16";
  return (
    <div className="fixed inset-0 h-fit sm:h-screen flex justify-center pt-32 z-51 bg-gray-600 bg-opacity-40">
      <div className="flex flex-col w-1/2 shadow-xl rounded-xl bg-stone-100 h-fit p-6">
        <button
          className="btn absolute top-[150px] right-[420px] bg-gray-400 border-0 hover:bg-gray-300 text-4xl font-bold text-black"
          onClick={props.onclose}
        >
          ×
        </button>
        <h1 className="bold-36 font-spartan text-background-10 px-16 center">
          Create a post
        </h1>
        <div className="flex flex-col sm:flex-row justify-left sm:flexBetween">
          <div className="w-full sm:w-2/5">
            <p className={style}>Location</p>
            <select
              className="select w-full max-w-xs font-spartan bg-white text-black regular-16"
              ref={locationRef}
            >
              <option disabled selected>
                Which aimag?
              </option>
              <option>Arkhangai</option>
              <option>Umnugovi</option>
              <option>Sukhbaatar</option>
              <option>Tuv</option>
            </select>

            <p className={style}>Title</p>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full max-w-xs bg-white font-spartan text-black regular-16"
              ref={titleRef}
            />
          </div>
          <div className="w-full sm:w-2/5 md:pr-6 lg:pr-16">
            <p className={style}>Salary (MNT)</p>
            <input
              type="text"
              placeholder="Salary"
              className="input input-bordered w-full max-w-xs bg-white font-spartan text-black regular-16"
              ref={salaryRef}
            />
            <p className={style}>Contact</p>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full max-w-xs bg-white font-spartan text-black regular-16"
              ref={contactRef}
            />
          </div>
        </div>
        <p className={style}>Description</p>
        <textarea
          className="textarea font-spartan text-black bg-white regular-16"
          placeholder="Description"
          ref={descriptionRef}
        ></textarea>
        <div className="pt-4 w-full">
          <button
            className="btn bg-background-10 w-full font-spartan text-white bold-28"
            onClick={createPost}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
