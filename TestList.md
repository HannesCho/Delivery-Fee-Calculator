# Test List

Here You can find the list of the tests for thie project.
<br>

## Unit Test

<br>

### Components/button/

<br>

#### DecrementBtn.test.tsx

<br>

| Test Name                                  |  Result   |
| ------------------------------------------ | :-------: |
| DecrementBtn should be rendered.           | ✅ Passed |
| If the value is 0, called setState to 0.   | ✅ Passed |
| If the value is 10, called setState to 9.  | ✅ Passed |
| If the value is NaN, called setState to 0. | ✅ Passed |

<br>

#### IncrementBtn.test.tsx

<br>

| Test Name                                                |  Result   |
| -------------------------------------------------------- | :-------: |
| IncrementBtn should be rendered.                         | ✅ Passed |
| If the value is 0, called setState to 1.                 | ✅ Passed |
| If the value is bigger than max, setState to max.        | ✅ Passed |
| If the value is smaller than max, setState to value + 1. | ✅ Passed |
| If the value is empty, called setState to 0.             | ✅ Passed |
| If the value is 10, called setState to 11.               | ✅ Passed |
| If the value is NaN, called setState to 0.               | ✅ Passed |

<br>

### Components/input/

<br>

#### DateInput.test.tsx

<br>

| Test Name                                                                |  Result   |
| ------------------------------------------------------------------------ | :-------: |
| DateInput should be rendered.                                            | ✅ Passed |
| DateInput contains attribute accoding to properties which are ✅ Passed. | ✅ Passed |
| onChnge handler should be called when value is changed.                  | ✅ Passed |

<br>

#### InputLabel.test.tsx

<br>

| Test Name                                    |  Result   |
| -------------------------------------------- | :-------: |
| label should be rendered and show the title. | ✅ Passed |
| label should have for attriute.              | ✅ Passed |

<br>

#### NumberInput.test.tsx

<br>

| Test Name                                                               |  Result   |
| ----------------------------------------------------------------------- | :-------: |
| NumberInput should be rendered.                                         | ✅ Passed |
| NumberInput contains attribute accoding to properties which are Passed. | ✅ Passed |
| Placeholder should be no string when input field is focused.            | ✅ Passed |
| onChnge handler should be called when value is changed.                 | ✅ Passed |
| onBlur handler should be called when input field is blured.             | ✅ Passed |

<br>

#### TimeInput.test.tsx

<br>

| Test Name                                                             |  Result   |
| --------------------------------------------------------------------- | :-------: |
| TimeInput should be rendered.                                         | ✅ Passed |
| TimeInput contains attribute accoding to properties which are Passed. | ✅ Passed |
| onChnge handler should be called when value is changed.               | ✅ Passed |

<br>

### Components/layout/

<br>

#### Footer.test.tsx

| Test Name                  |  Result   |
| -------------------------- | :-------: |
| Footer should be rendered. | ✅ Passed |
| Footer contains copyright. | ✅ Passed |

<br>

#### Navbar.test.tsx

| Test Name                                              |  Result   |
| ------------------------------------------------------ | :-------: |
| Navbar should be rendered.                             | ✅ Passed |
| Link should be generated for home and calculator page. | ✅ Passed |

### Components/messages/

<br>

#### ShowErrorText.test.tsx

| Test Name                                                                                          |  Result   |
| -------------------------------------------------------------------------------------------------- | :-------: |
| ShowErrorText should be rendered when showErrorText is true.                                       | ✅ Passed |
| ShowErrorText should not be rendered when showErrorText is false.                                  | ✅ Passed |
| ShowErrorText for float number should be rendered when showErrorText is true and float is true.    | ✅ Passed |
| ShowErrorText for integer number should be rendered when showErrorText is true and float is flase. | ✅ Passed |

<br>

#### ShowText.test.tsx

| Test Name                                                                                |  Result   |
| ---------------------------------------------------------------------------------------- | :-------: |
| ShowText should be rendered with corresponding text when cartValue is more than 100.     | ✅ Passed |
| ShowText should not be rendered with corresponding text when cartValue is less than 100. | ✅ Passed |
| ShowText should be rendered when with corresponding text totalFee is more than 15.       | ✅ Passed |
| ShowText should not be rendered when with corresponding text totalFee is less than 15.   | ✅ Passed |

<br>

### pages/

 <br>

#### Calculator.test.tsx

**All components render test.**
<br>

| Test Name                                                |  Result   |
| -------------------------------------------------------- | :-------: |
| Calculator should be rendered.                           | ✅ Passed |
| All NumberInputs should be rendered.                     | ✅ Passed |
| DateInput and TimeInput should be rendered.              | ✅ Passed |
| Texts should be rendered.                                | ✅ Passed |
| increment and decrement btns should be rendered 3 times. | ✅ Passed |
| Check out form and btn should be rendered.               | ✅ Passed |
| Patial and Toatal fee values fields should be rendered.  | ✅ Passed |
| Check out Btn should be rendered.                        | ✅ Passed |

<br>

**Input value onChange test.**

| Test Name                                                        |  Result   |
| ---------------------------------------------------------------- | :-------: |
| Input value should be chagned when user input different value.   | ✅ Passed |
| Date and Time should be chagned when user input different value. | ✅ Passed |

<br>

**Right clac result test.**

| Test Name                                                   |  Result   |
| ----------------------------------------------------------- | :-------: |
| All the partial fees should be displayed, if it is applied. | ✅ Passed |
| Friday Rush rate should be displayed, if it is applied.     | ✅ Passed |

<br>

**Total fee test.**

| Test Name                                                  |  Result   |
| ---------------------------------------------------------- | :-------: |
| Total fee should be displayed correctly.                   | ✅ Passed |
| Total fee should be 0, if the Cart Value is over 100 euro. | ✅ Passed |
| Total fee should not over 15 euro.                         | ✅ Passed |

<br>

#### CheckedOut.test.tsx

| Test Name                                         |  Result   |
| ------------------------------------------------- | :-------: |
| Checkedout page should be rendered.               | ✅ Passed |
| The link should be generated for calculator page. | ✅ Passed |

<br>

#### Home.test.tsx

| Test Name                                         |  Result   |
| ------------------------------------------------- | :-------: |
| Home should be rendered.                          | ✅ Passed |
| The link should be generated for calculator page. | ✅ Passed |

<br>

### utils/calc

<br>

#### additionalDistanceFee.test.tsx

| Test Name                                |  Result   |
| ---------------------------------------- | :-------: |
| additionalDistanceFee should be defined. | ✅ Passed |
| additional fee of 1499m is 1 euro.       | ✅ Passed |
| additional fee of 1500m is 1 euro.       | ✅ Passed |
| additional fee of 1501m is 2 euro.       | ✅ Passed |

<br>

#### additionalItems.test.tsx

| Test Name                                                |  Result   |
| -------------------------------------------------------- | :-------: |
| additionalItems should be defined.                       | ✅ Passed |
| if there are less than 4 itmes additional fee is 0 euro. | ✅ Passed |
| if there are 5 itmes additional fee is 0.5 euro.         | ✅ Passed |

<br>

#### basicDistanceFee.test.tsx

| Test Name                                                |  Result   |
| -------------------------------------------------------- | :-------: |
| basicDistanceFee should be defined.                      | ✅ Passed |
| basic distance fee is 0 euro, if there is no distance.   | ✅ Passed |
| basic distance fee is 2 euro, no matter of the distance. | ✅ Passed |

<br>

#### basicSurcharge.test.tsx

| Test Name                                                        |  Result   |
| ---------------------------------------------------------------- | :-------: |
| basicSurcharge should be defined.                                | ✅ Passed |
| basic surcharge is difference between Cart Value and 10 euro.    | ✅ Passed |
| basic surcharge is 0 euro, if Cart Value is higher than 10 euro. | ✅ Passed |
| basic surcharge is 0 euro, if Cart Value is 0 euro.              | ✅ Passed |

<br>

#### extraBulkFee.test.tsx

| Test Name                                                    |  Result   |
| ------------------------------------------------------------ | :-------: |
| extraBulkFee should be defined.                              | ✅ Passed |
| Extra bulk fee is 1.2 euro, if there are more than 12 items. | ✅ Passed |

<br>

#### feeCalculator.test.tsx

| Test Name                                                                      |  Result   |
| ------------------------------------------------------------------------------ | :-------: |
| feeCalculator should be defined.                                               | ✅ Passed |
| Delivery Fee is not more than 15 euro.                                         | ✅ Passed |
| if Cart Value is more than 100 Delivery Fee is 0 euro.                         | ✅ Passed |
| Only Surcharge.                                                                | ✅ Passed |
| Only Basic Distance Fee.                                                       | ✅ Passed |
| Additional Distance Fee.                                                       | ✅ Passed |
| Only additional items Fee.                                                     | ✅ Passed |
| Extra Bulk items Fee.                                                          | ✅ Passed |
| if date is friday and time is between 3 and 7 PM(UTC), friday rush will apply. | ✅ Passed |

<br>

#### fridayRush.test.tsx

| Test Name                                                                                    |  Result   |
| -------------------------------------------------------------------------------------------- | :-------: |
| fridayRush should be defined.                                                                | ✅ Passed |
| if date is friday and time is between 3 and 7 PM(UTC), friday rush should apply.             | ✅ Passed |
| if date is not friday and time is not between 3 and 7 PM(UTC), friday rush should not apply. | ✅ Passed |

<br>

> ### utils/converter
>
> <br>

#### dateToString.test.tsx

| Test Name                                                              |  Result   |
| ---------------------------------------------------------------------- | :-------: |
| dateToString should be defined.                                        | ✅ Passed |
| 0 shold be added to month, if their value is less than 9.              | ✅ Passed |
| 0 shold be added to date, if their value is less than 9.               | ✅ Passed |
| 0 shold not be added to month and date, if their value is more than 9. | ✅ Passed |
| dateToString shold return date as yyyy-mm-dd.                          | ✅ Passed |

<br>

#### timeToString.test.tsx

| Test Name                                                               |  Result   |
| ----------------------------------------------------------------------- | :-------: |
| timeToString should be defined.                                         | ✅ Passed |
| 0 shold be added to hour, if their value is less than 9.                | ✅ Passed |
| 0 shold be added to minute, if their value is less than 9.              | ✅ Passed |
| 0 shold not be added to hour and minute, if their value is more than 9. | ✅ Passed |
| timeToString shold return UTC time as hh:mm.                            | ✅ Passed |

### utils/handler

<br>

#### dateHandleChange.test.tsx

| Test Name                                                                                    |  Result   |
| -------------------------------------------------------------------------------------------- | :-------: |
| dateHandleChange shold be able to call setState with value.                                  | ✅ Passed |
| dateHandleChange shold be able to call setState with today when value is bigger than range.  | ✅ Passed |
| dateHandleChange shold be able to call setState with today when value is smaller than range. | ✅ Passed |

<br>

#### handleBlur.test.tsx

| Test Name | Result |
| | :: |
| handleBlur shold be able to call setShowErrorText once when error is true. | ✅ Passed |
| handleBlur shold be able to call setShowErrorText and setError once when input is numbers. | ✅ Passed |
<br>

#### handleChange.test.tsx

| Test Name                                                                                   |  Result   |
| ------------------------------------------------------------------------------------------- | :-------: |
| handleChange shold be able to call setState with value when value is in range.              | ✅ Passed |
| handleChange shold be able to call setState with max when value bigger than range.          | ✅ Passed |
| handleChange shold be able to call setState with min when value smaller than range.         | ✅ Passed |
| handleChange shold be able to call serError once when error is true and pattern is matched. | ✅ Passed |

<br>

#### handletimeHandleChangeChange.test.tsx

| Test Name                                                                                   |  Result   |
| ------------------------------------------------------------------------------------------- | :-------: |
| handleChange shold be able to call setState with value when value is in range.              | ✅ Passed |
| handleChange shold be able to call setState with max when value bigger than range.          | ✅ Passed |
| handleChange shold be able to call setState with min when value smaller than range.         | ✅ Passed |
| handleChange shold be able to call serError once when error is true and pattern is matched. | ✅ Passed |

<br>

## End to End Test

<br>

### /e2e.test.tsx

| Test Name                                    |  Result   |
| -------------------------------------------- | :-------: |
| Link to Check out should be worked.          | ✅ Passed |
| Total Fee shold be passed to Check out page. | ✅ Passed |
