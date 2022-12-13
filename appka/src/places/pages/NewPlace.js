import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Nadpis"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Zadejte validni nadpis."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Popis"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Zadejte validni popis prosím."
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Adresa"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Přidej lokaci
      </Button>
    </form>
  );
};

export default NewPlace;
