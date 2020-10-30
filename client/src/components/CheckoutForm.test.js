import React from "react";
import { fireEvent, getByAltText, getByText, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render (
        <CheckoutForm />
    )

    const header = screen.getByText(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
    render (
        <CheckoutForm />
    )

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    fireEvent.change(firstNameInput, {
        target: {
            value: 'Brandon',
            name: 'firstName'
        }
    })
    fireEvent.change(lastNameInput, {
        target: {
            value: 'Sievert',
            name: 'lastName'
        }
    })
    fireEvent.change(addressInput, {
        target: {
            value: 'random address dr',
            name: 'address'
        }
    })
    fireEvent.change(cityInput, {
        target: {
            value: 'Atlanta',
            name: 'city'
        }
    })
    fireEvent.change(stateInput, {
        target: {
            value: 'Georgia',
            name: 'state'
        }
    })
    fireEvent.change(zipInput, {
        target: {
            value: '30241',
            name: 'zip'
        }
    })

    const newFirstNameInput = screen.getByText(/brandon/i)
    expect(newFirstNameInput).toBeTruthy()

    const newLastNameInput = screen.getByText(/sievert/i)
    expect(newLastNameInput).toBeTruthy()

    const newAddressInput = screen.getByText(/random address dr/i)
    expect(newAddressInput).toBeTruthy()

    const newCityInput = screen.getByText(/atlanta/i)
    expect(newCityInput).toBeTruthy()

    const newStateInput = screen.getByText(/georgia/i)
    expect(newStateInput).toBeTruthy()

    const newZipInput = screen.getByText(/30241/i)
    expect(newZipInput).toBeTruthy()
});
