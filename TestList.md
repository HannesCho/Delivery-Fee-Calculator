# Test List

Here You can find the list of the tests for thie project.

## Unit Test

> ### Components/button/

> > #### DecrementBtn.test.tsx

> > | Test Name | Result |
> > | | :: |
> > | DecrementBtn should be rendered. | <span style="color:green">Passed<span> |
> > | If the value is 0, called setState to 0. | <span style="color:green">Passed<span> |
> > | If the value is 10, called setState to 9. | <span style="color:green">Passed<span> |
> > | If the value is NaN, called setState to 0. | <span style="color:green">Passed<span> |

> > #### IncrementBtn.test.tsx

> > | Test Name                                                |                 Result                 |
> > | -------------------------------------------------------- | :------------------------------------: |
> > | IncrementBtn should be rendered.                         | <span style="color:green">Passed<span> |
> > | If the value is 0, called setState to 1.                 | <span style="color:green">Passed<span> |
> > | If the value is bigger than max, setState to max.        | <span style="color:green">Passed<span> |
> > | If the value is smaller than max, setState to value + 1. | <span style="color:green">Passed<span> |
> > | If the value is empty, called setState to 0.             | <span style="color:green">Passed<span> |
> > | If the value is 10, called setState to 11.               | <span style="color:green">Passed<span> |
> > | If the value is NaN, called setState to 0.               | <span style="color:green">Passed<span> |

> ### Components/input/

> > #### DateInput.test.tsx

> > | Test Name                                                                                             |                 Result                 |
> > | ----------------------------------------------------------------------------------------------------- | :------------------------------------: |
> > | DateInput should be rendered.                                                                         | <span style="color:green">Passed<span> |
> > | DateInput contains attribute accoding to properties which are <span style="color:green">Passed<span>. | <span style="color:green">Passed<span> |
> > | onChnge handler should be called when value is changed.                                               | <span style="color:green">Passed<span> |

> > #### InputLabel.test.tsx

> > | Test Name                                    |                 Result                 |
> > | -------------------------------------------- | :------------------------------------: |
> > | label should be rendered and show the title. | <span style="color:green">Passed<span> |
> > | label should have for attriute.              | <span style="color:green">Passed<span> |

> > #### NumberInput.test.tsx

> > | Test Name                                                               |                 Result                 |
> > | ----------------------------------------------------------------------- | :------------------------------------: |
> > | NumberInput should be rendered.                                         | <span style="color:green">Passed<span> |
> > | NumberInput contains attribute accoding to properties which are Passed. | <span style="color:green">Passed<span> |
> > | Placeholder should be no string when input field is focused.            | <span style="color:green">Passed<span> |
> > | onChnge handler should be called when value is changed.                 | <span style="color:green">Passed<span> |
> > | onBlur handler should be called when input field is blured.             | <span style="color:green">Passed<span> |

> > #### TimeInput.test.tsx

> > | Test Name | Result |
> > | | :: |
> > | TimeInput should be rendered. | <span style="color:green">Passed<span> |
> > | TimeInput contains attribute accoding to properties which are Passed. | <span style="color:green">Passed<span> |
> > | onChnge handler should be called when value is changed. | <span style="color:green">Passed<span> |

> ### Components/layout/

> > #### Footer.test.tsx

> > | Test Name                  |                 Result                 |
> > | -------------------------- | :------------------------------------: |
> > | Footer should be rendered. | <span style="color:green">Passed<span> |
> > | Footer contains copyright. | <span style="color:green">Passed<span> |

> > #### Navbar.test.tsx

> > | Test Name | Result |
> > | | :: |
> > | Navbar should be rendered. | <span style="color:green">Passed<span> |
> > | Link should be generated for home and calculator page. | <span style="color:green">Passed<span> |

> ### Components/messages/

> > #### ShowErrorText.test.tsx

> > | Test Name                                                                                          |                 Result                 |
> > | -------------------------------------------------------------------------------------------------- | :------------------------------------: |
> > | ShowErrorText should be rendered when showErrorText is true.                                       | <span style="color:green">Passed<span> |
> > | ShowErrorText should not be rendered when showErrorText is false.                                  | <span style="color:green">Passed<span> |
> > | ShowErrorText for float number should be rendered when showErrorText is true and float is true.    | <span style="color:green">Passed<span> |
> > | ShowErrorText for integer number should be rendered when showErrorText is true and float is flase. | <span style="color:green">Passed<span> |

> > #### ShowText.test.tsx

> > | Test Name                                                                                |                 Result                 |
> > | ---------------------------------------------------------------------------------------- | :------------------------------------: |
> > | ShowText should be rendered with corresponding text when cartValue is more than 100.     | <span style="color:green">Passed<span> |
> > | ShowText should not be rendered with corresponding text when cartValue is less than 100. | <span style="color:green">Passed<span> |
> > | ShowText should be rendered when with corresponding text totalFee is more than 15.       | <span style="color:green">Passed<span> |
> > | ShowText should not be rendered when with corresponding text totalFee is less than 15.   | <span style="color:green">Passed<span> |

> ### pages/

> > #### Calculator.test.tsx

> > <br/>

> > **All components render test.**

> > | Test Name                                                |                 Result                 |
> > | -------------------------------------------------------- | :------------------------------------: |
> > | Calculator should be rendered.                           | <span style="color:green">Passed<span> |
> > | All NumberInputs should be rendered.                     | <span style="color:green">Passed<span> |
> > | DateInput and TimeInput should be rendered.              | <span style="color:green">Passed<span> |
> > | Texts should be rendered.                                | <span style="color:green">Passed<span> |
> > | increment and decrement btns should be rendered 3 times. | <span style="color:green">Passed<span> |
> > | Check out form and btn should be rendered.               | <span style="color:green">Passed<span> |
> > | Patial and Toatal fee values fields should be rendered.  | <span style="color:green">Passed<span> |
> > | Check out Btn should be rendered.                        | <span style="color:green">Passed<span> |

> > <br/>

> > **Input value onChange test.**

> > | Test Name                                                        |                 Result                 |
> > | ---------------------------------------------------------------- | :------------------------------------: |
> > | Input value should be chagned when user input different value.   | <span style="color:green">Passed<span> |
> > | Date and Time should be chagned when user input different value. | <span style="color:green">Passed<span> |

> > <br/>

> > **Right clac result test.**

> > | Test Name                                                   |                 Result                 |
> > | ----------------------------------------------------------- | :------------------------------------: |
> > | All the partial fees should be displayed, if it is applied. | <span style="color:green">Passed<span> |
> > | Friday Rush rate should be displayed, if it is applied.     | <span style="color:green">Passed<span> |

> > <br/>

> > **Total fee test.**

> > | Test Name                                                  |                 Result                 |
> > | ---------------------------------------------------------- | :------------------------------------: |
> > | Total fee should be displayed correctly.                   | <span style="color:green">Passed<span> |
> > | Total fee should be 0, if the Cart Value is over 100 euro. | <span style="color:green">Passed<span> |
> > | Total fee should not over 15 euro.                         | <span style="color:green">Passed<span> |

> > #### CheckedOut.test.tsx

> > | Test Name                                         |                 Result                 |
> > | ------------------------------------------------- | :------------------------------------: |
> > | Checkedout page should be rendered.               | <span style="color:green">Passed<span> |
> > | The link should be generated for calculator page. | <span style="color:green">Passed<span> |

> > #### Home.test.tsx

> > | Test Name                                         |                 Result                 |
> > | ------------------------------------------------- | :------------------------------------: |
> > | Home should be rendered.                          | <span style="color:green">Passed<span> |
> > | The link should be generated for calculator page. | <span style="color:green">Passed<span> |

> ### utils/calc

> > #### additionalDistanceFee.test.tsx

> > | Test Name                                |                 Result                 |
> > | ---------------------------------------- | :------------------------------------: |
> > | additionalDistanceFee should be defined. | <span style="color:green">Passed<span> |
> > | additional fee of 1499m is 1 euro.       | <span style="color:green">Passed<span> |
> > | additional fee of 1500m is 1 euro.       | <span style="color:green">Passed<span> |
> > | additional fee of 1501m is 2 euro.       | <span style="color:green">Passed<span> |

> > #### additionalItems.test.tsx

> > | Test Name                                                |                 Result                 |
> > | -------------------------------------------------------- | :------------------------------------: |
> > | additionalItems should be defined.                       | <span style="color:green">Passed<span> |
> > | if there are less than 4 itmes additional fee is 0 euro. | <span style="color:green">Passed<span> |
> > | if there are 5 itmes additional fee is 0.5 euro.         | <span style="color:green">Passed<span> |

> > #### basicDistanceFee.test.tsx

> > | Test Name                                                |                 Result                 |
> > | -------------------------------------------------------- | :------------------------------------: |
> > | basicDistanceFee should be defined.                      | <span style="color:green">Passed<span> |
> > | basic distance fee is 0 euro, if there is no distance.   | <span style="color:green">Passed<span> |
> > | basic distance fee is 2 euro, no matter of the distance. | <span style="color:green">Passed<span> |

> > #### basicSurcharge.test.tsx

> > | Test Name                                                        |                 Result                 |
> > | ---------------------------------------------------------------- | :------------------------------------: |
> > | basicSurcharge should be defined.                                | <span style="color:green">Passed<span> |
> > | basic surcharge is difference between Cart Value and 10 euro.    | <span style="color:green">Passed<span> |
> > | basic surcharge is 0 euro, if Cart Value is higher than 10 euro. | <span style="color:green">Passed<span> |
> > | basic surcharge is 0 euro, if Cart Value is 0 euro.              | <span style="color:green">Passed<span> |

> > #### extraBulkFee.test.tsx

> > | Test Name | Result |
> > | | :: |
> > | extraBulkFee should be defined. | <span style="color:green">Passed<span> |
> > | Extra bulk fee is 1.2 euro, if there are more than 12 items. | <span style="color:green">Passed<span> |

> > #### feeCalculator.test.tsx

> > | Test Name | Result |
> > | | :: |
> > | feeCalculator should be defined. | <span style="color:green">Passed<span> |
> > | Delivery Fee is not more than 15 euro. | <span style="color:green">Passed<span> |
> > | if Cart Value is more than 100 Delivery Fee is 0 euro. | <span style="color:green">Passed<span> |
> > | Only Surcharge. | <span style="color:green">Passed<span> |
> > | Only Basic Distance Fee. | <span style="color:green">Passed<span> |
> > | Additional Distance Fee. | <span style="color:green">Passed<span> |
> > | Only additional items Fee. | <span style="color:green">Passed<span> |
> > | Extra Bulk items Fee. | <span style="color:green">Passed<span> |
> > | if date is friday and time is between 3 and 7 PM(UTC), friday rush will apply. | <span style="color:green">Passed<span> |

> > #### fridayRush.test.tsx

> > | Test Name                                                                                    |                 Result                 |
> > | -------------------------------------------------------------------------------------------- | :------------------------------------: |
> > | fridayRush should be defined.                                                                | <span style="color:green">Passed<span> |
> > | if date is friday and time is between 3 and 7 PM(UTC), friday rush should apply.             | <span style="color:green">Passed<span> |
> > | if date is not friday and time is not between 3 and 7 PM(UTC), friday rush should not apply. | <span style="color:green">Passed<span> |

> ### utils/converter

> > #### dateToString.test.tsx

> > | Test Name                                                              |                 Result                 |
> > | ---------------------------------------------------------------------- | :------------------------------------: |
> > | dateToString should be defined.                                        | <span style="color:green">Passed<span> |
> > | 0 shold be added to month, if their value is less than 9.              | <span style="color:green">Passed<span> |
> > | 0 shold be added to date, if their value is less than 9.               | <span style="color:green">Passed<span> |
> > | 0 shold not be added to month and date, if their value is more than 9. | <span style="color:green">Passed<span> |
> > | dateToString shold return date as yyyy-mm-dd.                          | <span style="color:green">Passed<span> |

> > #### timeToString.test.tsx

> > | Test Name                                                               |                 Result                 |
> > | ----------------------------------------------------------------------- | :------------------------------------: |
> > | timeToString should be defined.                                         | <span style="color:green">Passed<span> |
> > | 0 shold be added to hour, if their value is less than 9.                | <span style="color:green">Passed<span> |
> > | 0 shold be added to minute, if their value is less than 9.              | <span style="color:green">Passed<span> |
> > | 0 shold not be added to hour and minute, if their value is more than 9. | <span style="color:green">Passed<span> |
> > | timeToString shold return UTC time as hh:mm.                            | <span style="color:green">Passed<span> |

> ### utils/handler

> > #### dateHandleChange.test.tsx

> > | Test Name                                                                                    |                 Result                 |
> > | -------------------------------------------------------------------------------------------- | :------------------------------------: |
> > | dateHandleChange shold be able to call setState with value.                                  | <span style="color:green">Passed<span> |
> > | dateHandleChange shold be able to call setState with today when value is bigger than range.  | <span style="color:green">Passed<span> |
> > | dateHandleChange shold be able to call setState with today when value is smaller than range. | <span style="color:green">Passed<span> |

> > #### handleBlur.test.tsx

> > | Test Name | Result |
> > | | :: |
> > | handleBlur shold be able to call setShowErrorText once when error is true. | <span style="color:green">Passed<span> |
> > | handleBlur shold be able to call setShowErrorText and setError once when input is numbers. | <span style="color:green">Passed<span> |

> > #### handleChange.test.tsx

> > | Test Name                                                                                   |                 Result                 |
> > | ------------------------------------------------------------------------------------------- | :------------------------------------: |
> > | handleChange shold be able to call setState with value when value is in range.              | <span style="color:green">Passed<span> |
> > | handleChange shold be able to call setState with max when value bigger than range.          | <span style="color:green">Passed<span> |
> > | handleChange shold be able to call setState with min when value smaller than range.         | <span style="color:green">Passed<span> |
> > | handleChange shold be able to call serError once when error is true and pattern is matched. | <span style="color:green">Passed<span> |

> > #### handletimeHandleChangeChange.test.tsx

> > | Test Name                                                                                   |                 Result                 |
> > | ------------------------------------------------------------------------------------------- | :------------------------------------: |
> > | handleChange shold be able to call setState with value when value is in range.              | <span style="color:green">Passed<span> |
> > | handleChange shold be able to call setState with max when value bigger than range.          | <span style="color:green">Passed<span> |
> > | handleChange shold be able to call setState with min when value smaller than range.         | <span style="color:green">Passed<span> |
> > | handleChange shold be able to call serError once when error is true and pattern is matched. | <span style="color:green">Passed<span> |

## End to End Test

> ### /e2e.test.tsx

> > | Test Name                                    |                 Result                 |
> > | -------------------------------------------- | :------------------------------------: |
> > | Link to Check out should be worked.          | <span style="color:green">Passed<span> |
> > | Total Fee shold be passed to Check out page. | <span style="color:green">Passed<span> |
