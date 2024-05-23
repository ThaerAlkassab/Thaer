import styles from "../../styles/infoCard/infoCard.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import {Link, useLocation} from "react-router-dom";
import {prices} from "../Hero";


const InfoCard = ({ title, img }) => {
  const location = useLocation()

/////set payment value
  const [Paymentvalue, setPaymentValue] = useState(0);
  const [BookNumber, setBookNumber] = useState("");

///// country drop box
  const [state, setState] = useState({
    country: ""})
  const selectCountry = (val) => {
    setState({ country: val });
    setCountry(val);
  }
  const { country } = state;
/////
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Number, setNumber] = useState("");
  const [ArrivalTime, setArrivalTime] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [Postcode, setPostcode] = useState("");
  const [CityR, setCityR] = useState("");
  const [Comment, setComment] = useState("");
  const [CardNumber, setCardNumber] = useState("");
  const [ExpDate, setExpDate] = useState("");
  const [NameOnCard, setNameOnCard] = useState("");
  const [Country, setCountry] = useState("");
  const [Cvc, setCvc] = useState("");
  const [Type, setType] = useState("");
  const [Voucher, setVoucher] = useState("");
  const SendData = {
    authentication: {
      apiKey: "BookingpageBlueHouse",
      propKey: "BB3578IceZenoLand",
    },
    roomId: location.state.idroom,
    unitId: "1",
    roomQty: "1",
    status: "1",
    firstNight: location.state.checkkin,
    lastNight: location.state.checkkout,
    guestTitle: "Mr/Miss",
    guestFirstName: Firstname,
    guestName: Lastname,
    guestEmail: Email,
    guestPhone: Number,
    guestAddress: Address,
    guestCity: City,
    guestPostcode: Postcode,
    guestCountry: Country,
    guestArrivalTime: ArrivalTime,
    guestVoucher: Voucher,
    guestComments: Comment,
    guestCardType: Type,
    guestCardNumber: CardNumber,
    guestCardName: NameOnCard,
    guestCardExpiry: ExpDate,
    guestCardCVV: Cvc,
    price: location.state.total_prices,
    refererEditable: "online",
    notifyUrl: "true",
    notifyGuest: true,
    notifyHost: false,
    assignBooking: false,
    checkAvailability: false,
  };


  const SendDataBankTransfer = {
    authentication: {
      apiKey: "BookingpageBlueHouse",
      propKey: "BB3578IceZenoLand",
    },
    roomId: location.state.idroom,
    unitId: "1",
    roomQty: "1",
    status: "1",
    firstNight: location.state.checkkin,
    lastNight: location.state.checkkout,
    guestTitle: "Mr/Miss",
    guestFirstName: Firstname,
    guestName: Lastname,
    guestEmail: Email,
    guestPhone: Number,
    guestAddress: Address,
    guestCity: City,
    guestPostcode: Postcode,
    guestCountry: Country,
    guestArrivalTime: ArrivalTime,
    guestVoucher: Voucher,
    guestComments: Comment,
    price: location.state.total_prices,
    refererEditable: "online",
    notifyUrl: "true",
    notifyGuest: true,
    notifyHost: false,
    assignBooking: false,
    checkAvailability: false,
  };
//validate credit card
// If this comment is removed the application will blow up
  const validCreditcard = cardnumb => {
    setCardNumber(cardnumb)
    console.log("aaaaaa"+cardnumb);

    const ccErrors = [];
    ccErrors[0] = "Unknown card type";
    ccErrors[1] = "No card number provided";
    ccErrors[2] = "Credit card number is invalid format";
    ccErrors[3] = "Credit card number is invalid";
    ccErrors[4] = "Credit card number has an inappropriate number of digits";
    ccErrors[5] = "Warning! This credit card number is associated with a scam attempt";


    const response = (success, message = null, type = null) => ({
      message,
      success,
      type
    });


    const luhnCheck = val => {
      let validsum = 0;
      let k = 1;


      for (let l = val.length - 1; l >= 0; l--) {
        let calck = 0;

        calck = Number(val.charAt(l)) * k;


        if (calck > 9) {
          validsum = validsum + 1;
          calck = calck - 10;
        }


        validsum = validsum + calck;


        if (k == 1) {
          k = 2;
        } else {
          k = 1;
        }
      }


      return (validsum % 10) == 0;
    }

    const cards = [];
    cards[0] = {
      name: "Visa",
      length: "13,16",
      prefixes: "4",
      checkdigit: true
    };
    cards[1] = {
      name: "MasterCard",
      length: "16",
      prefixes: "51,52,53,54,55",
      checkdigit: true
    };
    cards[2] = {
      name: "DinersClub",
      length: "14,16",
      prefixes: "36,38,54,55",
      checkdigit: true
    };
    cards[3] = {
      name: "CarteBlanche",
      length: "14",
      prefixes: "300,301,302,303,304,305",
      checkdigit: true
    };
    cards[4] = {
      name: "AmEx",
      length: "15",
      prefixes: "34,37",
      checkdigit: true
    };
    cards[5] = {
      name: "Discover",
      length: "16",
      prefixes: "6011,622,64,65",
      checkdigit: true
    };
    cards[6] = {
      name: "JCB",
      length: "16",
      prefixes: "35",
      checkdigit: true
    };
    cards[7] = {
      name: "enRoute",
      length: "15",
      prefixes: "2014,2149",
      checkdigit: true
    };
    cards[8] = {
      name: "Solo",
      length: "16,18,19",
      prefixes: "6334,6767",
      checkdigit: true
    };
    cards[9] = {
      name: "Switch",
      length: "16,18,19",
      prefixes: "4903,4905,4911,4936,564182,633110,6333,6759",
      checkdigit: true
    };
    cards[10] = {
      name: "Maestro",
      length: "12,13,14,15,16,18,19",
      prefixes: "5018,5020,5038,6304,6759,6761,6762,6763",
      checkdigit: true
    };
    cards[11] = {
      name: "VisaElectron",
      length: "16",
      prefixes: "4026,417500,4508,4844,4913,4917",
      checkdigit: true
    };
    cards[12] = {
      name: "LaserCard",
      length: "16,17,18,19",
      prefixes: "6304,6706,6771,6709",
      checkdigit: true
    };


    if (cardnumb.length == 0) {
      return response(false, ccErrors[1]);
    }


    cardnumb = cardnumb.replace(/\s/g, "");




    if (cardnumb == '5490997771092064') {
      return response(false, ccErrors[5]);
    }


    let lengthValid = false;
    let prefixValid = false;
    let cardCompany = "";


    for (let l = 0; l < cards.length; l++) {
      const prefix = cards[l].prefixes.split(",");

      for (let k = 0; k < prefix.length; k++) {
        const exp = new RegExp("^" + prefix[k]);
        if (exp.test(cardnumb)) {
          prefixValid = true;
        }
      }

      if (prefixValid) {
        const lengths = cards[l].length.split(",");

        for (let k = 0; k < lengths.length; k++) {
          if (cardnumb.length == lengths[k]) {
            lengthValid = true;
          }
        }
      }

      if (lengthValid && prefixValid) {
        cardCompany = cards[l].name;
        return response(true, null, cardCompany);
      }
    }


    if (!prefixValid) {
      return response(false, ccErrors[3]);
    }

    if (!lengthValid) {
      return response(false, ccErrors[4]);
    }

    return response(true, null, cardCompany);

  }




// handle card expiry date
  const _handlingCardExpiry = datee =>  {
    if (datee.indexOf('.') >= 0 || datee.length > 5) {

      return ;
    }

    if (datee.length === 2 && ExpDate.length === 1) {

      datee += '/'
    }

    // Update the state, which in turns updates the value in the text field
    setExpDate(datee)
    console.log(ExpDate)

  }
  console.log(ExpDate)


  function choosepaiment(e) {
    e.preventDefault();

    if (Paymentvalue==0){
      handleClick(e);
    }
    if (Paymentvalue==2){
      handleClickbanktransfer(e);
    }

    alert("Form submitted");

  }


  //submit form and send post request
  function contactSubmit(e) {
    e.preventDefault();


    handleClick(e);
    alert("Form submitted");

  }
  //Send post booking data card
  function handleClick(e) {
    e.preventDefault();
    axios
        .post("https://api.beds24.com/json/setBooking", JSON.stringify(SendData))
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    console.log("The button paiment was clicked.");
  }
  //Send post booking data bank transfer
  function handleClickbanktransfer(e) {
    e.preventDefault();
    axios
        .post("https://api.beds24.com/json/setBooking", JSON.stringify(SendDataBankTransfer))
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    console.log("The button paiment was clicked.");
  }
  //paypal when choosing dropdown
  function handleClickPaypal(e) {
    console.log("aaaaaaaa");
    setPaymentValue(e);
   axios
        .post("https://api.beds24.com/json/setBooking", JSON.stringify(SendDataBankTransfer))
        .then(function (response) {
          console.log(response.data.bookId);
          setBookNumber(response.data.bookId);
        })
        .catch(function (error) {
          console.log(error);
        });
    console.log("The button paiment was clicked.");

  }

  return (
      <div className={`${styles.listContainer}`}>

          <div className={`${styles.cardContainer}`}>
            <form
                      onSubmit={choosepaiment}>
            <div className={`${styles.nwsContainer}`}>

              <div className={`${styles.txtContainer}`}>
                <h2 className={`${styles.navTitle}`}>GUEST DETAILS</h2>

                <ul>
                  <li className={`${styles.listItem}`}>
                    <a href="#firstName">First Name</a>
                    <p>*</p>
                  </li>
                  <input required
                         onChange={(event) => setFirstname(event.target.value)}
                         type="text" minLength="3" maxLength="25"
                  />

                  <li className={`${styles.listItem}`}>
                    <a href="#lastName">Last Name</a>
                    <p>*</p>
                  </li>
                  <input required
                         onChange={(event) => setLastname(event.target.value)}
                         type="text" minLength="3" maxLength="25"
                  />

                  <li className={`${styles.listItem}`}>
                    <a href="#email">Email</a>
                    <p>*</p>
                  </li>
                  <input required
                         onChange={(event) => setEmail(event.target.value)}
                         type="email"
                  />

                  <li className={`${styles.listItem}`}>
                    <a href="#phoneNumber">Phone Number</a>
                    <p>*</p>
                  </li>
                  <input required
                         onChange={(event) => setNumber(event.target.value)}
                         type="number"
                  />

                  <li className={`${styles.listItem}`}>
                    <a href="#arrTime">Arrival Time</a>
                  </li>
                  <input
                      onChange={(event) => setArrivalTime(event.target.value)}
                      type="text"
                  />
                  <li className={`${styles.listItem}`}>
                    <a href="#arrTime">Payment method</a>
                  </li>
                  <select  id = "dropdown"  onChange={(event)=>handleClickPaypal(event.target.value)}>
                    <option value="0">Change payment Method</option>
                    <option  value="1">Paypal</option>
                    <option value="2">Bank Transfer</option>
                  </select>
                </ul>
              </div>
              <div className={`${styles.txt2Container}`}>
                <ul>
                  <li className={`${styles.listItem}`}>
                    <a href="#address">Address</a>
                    <p>*</p>
                  </li>
                  <input required
                         onChange={(event) => setAddress(event.target.value)}
                         type="text"
                  />

                  <li className={`${styles.listItem}`}>
                    <a href="#city">City</a>
                    <p>*</p>
                  </li>
                  <input required
                         onChange={(event) => setCity(event.target.value)}
                         type="text"
                  />

                  <li className={`${styles.listItem}`}>
                    <a href="#postCode">Postcode</a>
                    <p>*</p>
                  </li>
                  <input required
                         onChange={(event) => setPostcode(event.target.value)}
                         type="text"
                  />

                  <li className={`${styles.listItem}`}>
                    <a href="#city">City of Residence</a>
                    <p>*</p>
                  </li>
                  <input required
                         onChange={(event) => setCityR(event.target.value)}
                         type="text"
                  />

                  <li className={`${styles.listItem}`}>
                    <a href="#comments">Comments</a>
                  </li>
                  <input
                      onChange={(event) => setComment(event.target.value)}
                      className={`${styles.comSec}`}
                      type="text"
                  />

                </ul>
              </div>
            </div>
        </form>
            {Paymentvalue==0  ? (
        <form
                  onSubmit={choosepaiment}
        >
            <div className={`${styles.pyContainer}`}>
              <div className={`${styles.txt2Container}`}>
                <h2 className={`${styles.navTitle}`}>PAYMENT DETAILS</h2>
                <ul>
                  <li className={`${styles.listItem}`}>
                    <a href="#cardInfo">Card Information</a>
                    <p>*</p>
                  </li>
                  <input required
                         onChange={(event) =>  setType(validCreditcard(event.target.value).type)}
                         className={`${styles.inIcon}`}
                         name="crdtc"
                         id="crdtc"
                         placeholder=" 0000 0000 0000 0000"
                         onPaste={(e) => e.preventDefault()}
                         type="number"
                         onInput={(event) => event.target.value=event.target.value.slice(0,19)}
                         maxLength="19"
                         minLength="8"


                  />

                  <li className={`${styles.cardInfoContainer}`}>
                    <a href="#date"></a>
                    <input required onChange={(event) => setExpDate(event.target.value)}
                           className={`${styles.dateItem}`}
                           type="text"
                           name="date"
                           id="date"
                           placeholder=" MM/YY"
                           onChange={(event)=>_handlingCardExpiry(event.target.value)}
                           value={ExpDate}

                    />
                    <input required onChange={(event) => setCvc(event.target.value)}
                           type="tel"
                           name="cvc"
                           id="cvc"
                           placeholder=" CVC"
                           maxLength="3"
                    />
                  </li>

                  <li className={`${styles.listItem}`}>
                    <a href="#cardHolder">Name on Card</a>
                    <p>*</p>
                  </li>
                  <input required
                         onChange={(event) => setNameOnCard(event.target.value)}
                         type="text"
                         name="cntry"
                         id="name"
                         placeholder=" Name"
                         minLength="3" maxLength="50"
                  />

                  <li className={`${styles.listItem}`}>
                    <a href="#region">Country or Region</a>
                    <p>*</p>
                  </li>

                  <CountryDropdown required  className={`${styles.country}`}
                                   onChange={(val) => selectCountry(val)} value={country} />
                  <li className={`${styles.listItem}`}>
                    <a href="#voucher">Voucher Code</a>
                    <p>*</p>
                  </li>
                  <input
                      onChange={(event) => setVoucher(event.target.value)}
                      type="text"
                  />

                  <li className={`${styles.btn}`}>
                    <button type="submit">
                      Pay €{location.state.total_prices}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
        </form>
            ) : Paymentvalue==2  ?(
                <form
                    onSubmit={choosepaiment}
                >
                  <div className={`${styles.pyContainer}`}>
                    <div className={`${styles.txt2Container}`}>
                      <h2 className={`${styles.navTitle}`}>BANK TRANSFER</h2>
                      <h3 className={`${styles.navTitle}`}>Please pay your booking towards the following Account:</h3>
                      <br />
                      <h3 className={`${styles.navTitle}`}>Iban:            DE32700519950010344612<br /> Swift:           BYLADEM1ERD
                        <br />Bank:          Sparkasse Erding
                        <br />Name:         Blue House
                        <br />Reference:  Booking Number
                        <br /><br />Please send the receipt to accounting@bluehouse.is</h3>
                      <br />
                      <ul>
                        <li className={`${styles.listItem}`}>
                          <a href="#cardInfo">Select country</a>
                          <p>*</p>
                        </li>

                        <CountryDropdown required  className={`${styles.country}`}
                                         onChange={(val) => selectCountry(val)} value={country} />


                        <li className={`${styles.btn}`}>
                          <button type="submit">
                            Pay €{location.state.total_prices}
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>): (

                <form id="paypalform" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">

                  <input type="hidden"
                         name="business"
                         value="zeno@bluehouse.is"/>
                  <input
                    type="hidden" name="item_name" value={"Blue House B&amp;B Iceland - Booking "+BookNumber}/>
                  <input
                    type="hidden" name="item_number" value={BookNumber}/>
                  <input type="hidden" name="amount"
                                                                              value={location.state.total_prices}/>
                  <input type="hidden" name="no_shipping" value="1"/>
                  <input type="hidden" name="no_note" value="1"/>
                  <input type="hidden" name="custom" value={BookNumber}/>
                  <input type="hidden" name="currency_code" value="EUR"/>
                  <input type="hidden" name="cancel_return" value={"https://beds24.com/booking.php?paypalaction=cancel&amp;id="+BookNumber+"&amp;propid=3578&amp;b24token=208370422&amp;page=paypalcancel&amp;SID="}/>
                  <input
                    type="hidden" name="return"
                    value={"https://beds24.com/booking.php?paypalaction=return&amp;id="+BookNumber+"&amp;propid=3578&amp;b24token=208370422&amp;page=paypalreturn&amp;SID="}/><input
                    type="hidden" name="bn" value="Beds24_SP"/><img alt=""
                                                                    src="https://www.sandbox.paypal.com/en_US/i/btn/btn_paynow_SM.gif"
                                                                    width="1" height="1"/>
                  <br/>
                  <br/>
                  <br/>
                  <li className={`${styles.btn}`}>
                  <input id="buttonpaypal"  type="image" src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" name="submit" className="btn button whitegrad paybutton"
                         value="Pay Now"/><input type="hidden" name="cmd" value="_xclick"/>
                  </li>
                </form>
            )}
          </div>



      </div>
  );
};

export default InfoCard;
