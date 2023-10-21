// Purpose: Provide a form for users to sign in to the application.
import React, { useState } from "react";

// Utils
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

//  Components
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

// CSS
import {
  SignInFormContainer,
  ButtonsContainer,
} from "./sign-in-form.styles.jsx";

const deafultFromFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(deafultFromFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(deafultFromFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-login-credentials":
          alert("Incorrect email or password");
          break;
        default:
          console.log(error);
          break;
      }
      console.log("User SignIn encountered an error", error);
    }
  };

  return (
    <SignInFormContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;
