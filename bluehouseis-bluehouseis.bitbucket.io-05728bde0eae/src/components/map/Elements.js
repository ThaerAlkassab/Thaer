import bluehouse from "../../images/map/icons_blue house darkblue.svg";
import bonussupermarket from "../../images/map/icons_bonus supermarket darkblue.svg";
import bus from "../../images/map/icons_bus stop darkblue.svg";
import grotta from "../../images/map/icons_northern light appartment darkblue.svg";
import hallgrimsk from "../../images/map/icons_hallgrimskirka darkblue.svg";
import lighthouse from "../../images/map/icons_lighthouse darkblue.svg";
import PublicSwimmingpool from "../../images/map/icons_geotermal darkblue.svg";
import supermarket from "../../images/map/icons_minimal darkblue.svg";
import viking from "../../images/map/icons_viking darkblue.svg";
import puffin from "../../images/map/icons_puffin darkblue.svg";
import whale from "../../images/map/icons_whalewatching darkblue.svg";
import perlan from "../../images/map/icons_perlan darkblue.svg";

import bluehouseb from "../../images/map/icons_blue house darkblueb.svg";
import bonussupermarketb from "../../images/map/icons_bonus supermarket darkblueb.svg";
import busb from "../../images/map/icons_bus stop darkblueb.svg";
import grottab from "../../images/map/icons_northern light appartment darkblueb.svg";
import hallgrimskb from "../../images/map/icons_hallgrimskirka darkblueb.svg";
import lighthouseb from "../../images/map/icons_lighthouse darkblueb.svg";
import PublicSwimmingpoolb from "../../images/map/icons_geotermal darkblueb.svg";
import supermarketb from "../../images/map/icons_minimal darkblueb.svg";
import vikingb from "../../images/map/icons_viking darkblueb.svg";
import puffinb from "../../images/map/icons_puffin darkblueb.svg";
import whaleb from "../../images/map/icons_whalewatching darkblueb.svg";
import perlanb from "../../images/map/icons_perlan darkblueb.svg";

const iconMarket =
    "https://firebasestorage.googleapis.com/v0/b/bluehouse-d9cc4.appspot.com/o/mapIcons%2Ficon_supermarket-e1619518193545.png?alt=media&token=1db0c970-2e37-4468-808c-779854b6f4a5";
const iconSwimmingPool =
    "https://firebasestorage.googleapis.com/v0/b/bluehouse-d9cc4.appspot.com/o/mapIcons%2Ficon_swimming_pool-e1619518168502.png?alt=media&token=4cbea867-e9e6-44e1-9a50-4eec69e17a60";
const iconBus =
    "https://firebasestorage.googleapis.com/v0/b/bluehouse-d9cc4.appspot.com/o/mapIcons%2Ficon_bus_2-e1619518143914.png?alt=media&token=8a166831-b633-4036-adca-8e76d126f0b7s";
const iconHouse =
    "https://firebasestorage.googleapis.com/v0/b/bluehouse-d9cc4.appspot.com/o/mapIcons%2Ficon_house_1-e1619517470907.png?alt=media&token=033808d1-664e-4264-943a-aff45ea45b5e";

const features = [
  {
    position: { lat: 64.153491, lng:-21.946779 },
    icon: whale,
    type: "whale",
    iconb: whaleb,

  },
  {
    position: { lat: 64.128921, lng: -21.919546 },
    icon: perlan,
    type: "perlan",
    iconb: perlanb,
  },
  {
    position: { lat: 64.147583, lng: -21.922284 },
    icon: viking,
    type: "viking",
    iconb: vikingb,
  },
  {
    position:  { lat: 64.164754, lng: -21.907355 },
    icon: puffin,
    type: "puffin",
    iconb: puffinb,
  },
  {
    position: { lat:64.154115, lng: -21.998533 },
    icon: bluehouse,
    type: "blue_house",
    iconb: bluehouseb,
  },
  {
    position: { lat: 64.155020, lng: -22.004284 },
    icon: bus,
    type: "bus_station",
    iconb: busb,
  },
  {
    position: { lat: 64.152381, lng: -21.991011 },
    icon: PublicSwimmingpool,
    type: "public_swimmingPool",
    iconb: PublicSwimmingpoolb,
  },
  {
    position: { lat:  64.155515, lng: -21.951529 },
    icon: bonussupermarket,
    type: "super_market",
    iconb: bonussupermarketb,
  },
  {
    icon: lighthouse,
    type: "Grótta_Lighthouse",
    position: { lat: 64.164522, lng:-22.022136 },
    iconb: lighthouseb,
  },
  {
    icon: hallgrimsk,
    type: "Hallgrimska",
    position: { lat: 64.142004, lng:-21.926549 },
    iconb: hallgrimskb,

  },
  {
    icon: grotta,
    type: "Grótta_Apartment",
    position: { lat: 64.15582726221461, lng: -21.996956834337023 },
    iconb: grottab,
  },
  {
    icon: supermarket,
    type: "Supermarket",
    position: { lat: 64.151699, lng:-21.984832 },
    iconb: supermarketb,
  },
];

const legandItemsData = [
  {
    src: bluehouse,
    text: "Blue house B&B",
    position:  { lat:64.154115, lng: -21.998533 },
  },
  {
    src: grotta,
    text: "Grótta Northern Lights Apartment",
    position: { lat: 64.15582726221461, lng: -21.996956834337023 },
  },
  {
    src: lighthouse,
    text: "Grótta Lighthouse",
    position: { lat: 64.164522, lng:-22.022136 },
  },
  {
    src: bus,
    position: { lat:  64.155020, lng:-22.004284 },
    text: "Stop for Bus 11 Haedarbraut/Lindarbraut",
  },
  {
    src: PublicSwimmingpool,
    position:  { lat: 64.152381, lng: -21.991011 },
    text: "Geothermal Swimming Pool Sundlaug Seltjarnarnes",
  },
  {
    src: supermarket,
    text: "Minimall with nearest supermarket (08 AM - 12 AM)",
    position: { lat: 64.151699, lng:-21.984832 },
  },
  {
    src: bonussupermarket,
    position: { lat: 64.155515, lng: -21.951529 },
    text: "Bonus Supermarket",
  },
  {
    src: puffin,
    text: "Puffin resting place in the summer",
    position: { lat: 64.164754, lng: -21.907355 },
  },
  {
    src: whale,
    text: "Whalewatching at the old harbour",
    position: { lat: 64.153491, lng: -21.946779 },
  },
  {
    src: hallgrimsk,
    text: "Hallgrimskirka",
    position: { lat: 64.142004, lng:-21.926549 },
  },
  {
    src: viking,
    text: "Viking Ship sculpture",
    position: { lat: 64.147583, lng: -21.922284 },
  },
  {
    src: perlan,
    text: "Perlan Museum and viewing platform",
    position: { lat: 64.128921, lng: -21.919546 },
  },


];

export { legandItemsData, features };
