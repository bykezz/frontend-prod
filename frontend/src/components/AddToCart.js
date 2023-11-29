import { useCallback, useState, useEffect } from "react";
import styles from "./AddToCart.module.css";
import Select from "react-select";
import { Stack, Textarea, Input } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import { useCartContext1 } from "../context/CartContext1";
import axios from "axios";
import PaystackPop from "@paystack/inline-js";
import { useCustomerProfile } from "../context/CustomerProfileContext";
import { useSlug } from "../context/SlugContext";
import { reference } from "@popperjs/core";

const options = [
  { value: "Abia", label: "Abia" },
  { value: "Adamawa", label: "Adamawa" },
  { value: "Akwa Ibom", label: "Akwa Ibom" },
  { value: "Anambra", label: "Anambra" },
  { value: "Bauchi", label: "Bauchi" },
  { value: "Bayelsa", label: "Bayelsa" },
  { value: "Benue", label: "Benue" },
  { value: "Borno", label: "Borno" },
  { value: "Cross River", label: "Cross River" },
  { value: "Delta", label: "Delta" },
  { value: "Ebonyi", label: "Ebonyi" },
  { value: "Edo", label: "Edo" },
  { value: "Ekiti", label: "Ekiti" },
  { value: "Enugu", label: "Enugu" },
  { value: "FCT", label: "FCT" },
  { value: "Gombe", label: "Gombe" },
  { value: "Imo", label: "Imo" },
  { value: "Jigawa", label: "Jigawa" },
  { value: "Kaduna", label: "Kaduna" },
  { value: "Kano", label: "Kano" },
  { value: "Katsina", label: "Katsina" },
  { value: "Kebbi", label: "Kebbi" },
  { value: "Kogi", label: "Kogi" },
  { value: "Kwara", label: "Kwara" },
  { value: "Lagos", label: "Lagos" },
  { value: "Nasarawa", label: "Nasarawa" },
  { value: "Niger", label: "Niger" },
  { value: "Ogun", label: "Ogun" },
  { value: "Ondo", label: "Ondo" },
  { value: "Osun", label: "Osun" },
  { value: "Oyo", label: "Oyo" },
  { value: "Plateau", label: "Plateau" },
  { value: "Rivers", label: "Rivers" },
  { value: "Sokoto", label: "Sokoto" },
  { value: "Taraba", label: "Taraba" },
  { value: "Yobe", label: "Yobe" },
  { value: "Zamfara", label: "Zamfara" },
];

const AddToCart = ({ onClose, cartItems }) => {
  const [isAddressPopupOpen, setAddressPopupOpen] = useState(false);
  const [isEdit, setEdit] = useState();
  const [selectedState, setSelectedState] = useState(null);
  const [selectedLGA, setSelectedLGA] = useState(null);
  const { isLoggedIn } = useAuth();
  const { street1, city1, state1, email1 } = useCustomerProfile();
  const [street, setStreet] = useState(street1);
  const [city, setCity] = useState(city1);
  const [state, setState] = useState(state1);
  const { generateRandomSlug } = useSlug();
  const {
    cartItems1,
    cartItems2,
    total,
    count,
    setCartItems1,
    setCartItems2,
    setTotal,
    setCount,
    cartId,
  } = useCartContext1();

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedLGA(null);
  };

  const localGov = {
    Abia: [
      "Aba North",
      "Aba South",
      "Arochukwu",
      "Bende",
      "Ikwuano",
      "Isiala Ngwa North",
      "Isiala Ngwa South",
      "Isuikwuato",
      "Obi Ngwa",
      "Ohafia",
      "Osisioma Ngwa",
      "Ugwunagbo",
      "Ukwa East",
      "Ukwa West",
      "Umuahia North",
      "Umuahia South",
      "Umunneochi",
    ],
    Adamawa: [
      "Demsa",
      "Fufore",
      "Ganye",
      "Girei",
      "Gombi",
      "Guyuk",
      "Hong",
      "Jada",
      "Lamurde",
      "Madagali",
      "Maiha",
      "Mayo-Belwa",
      "Michika",
      "Mubi North",
      "Mubi South",
      "Numan",
      "Shelleng",
      "Song",
      "Toungo",
      "Yola North",
      "Yola South",
    ],
    "Akwa Ibom": [
      "Abak",
      "Eastern Obolo",
      "Eket",
      "Esit Eket",
      "Essien Udim",
      "Etim Ekpo",
      "Etinan",
      "Ibeno",
      "Ibesikpo Asutan",
      "Ibiono-Ibom",
      "Ika",
      "Ikono",
      "Ikot Abasi",
      "Ikot Ekpene",
      "Ini",
      "Itu",
      "Mbo",
      "Mkpat-Enin",
      "Nsit-Atai",
      "Nsit-Ibom",
      "Nsit-Ubium",
      "Obot Akara",
      "Okobo",
      "Onna",
      "Oron",
      "Oruk Anam",
      "Ukanafun",
      "Udung-Uko",
      "Uruan",
      "Urue-Offong/Oruko",
      "Uyo",
    ],
    Anambra: [
      "Aguata",
      "Anambra East",
      "Anambra West",
      "Anaocha",
      "Awka North",
      "Awka South",
      "Ayamelum",
      "Dunukofia",
      "Ekwusigo",
      "Idemili North",
      "Idemili South",
      "Ihiala",
      "Njikoka",
      "Nnewi North",
      "Nnewi South",
      "Ogbaru",
      "Onitsha North",
      "Onitsha South",
      "Orumba North",
      "Orumba South",
      "Oyi",
    ],
    Bauchi: [
      "Alkaleri",
      "Bauchi",
      "Bogoro",
      "Damban",
      "Darazo",
      "Dass",
      "Gamawa",
      "Ganjuwa",
      "Giade",
      "Itas/Gadau",
      "Jama'are",
      "Katagum",
      "Kirfi",
      "Misau",
      "Ningi",
      "Shira",
      "Tafawa Balewa",
      "Toro",
      "Warji",
      "Zaki",
    ],
    Bayelsa: [
      "Brass",
      "Ekeremor",
      "Kolokuma/Opokuma",
      "Nembe",
      "Ogbia",
      "Sagbama",
      "Southern Ijaw",
      "Yenagoa",
    ],
    Benue: [
      "Ado",
      "Agatu",
      "Apa",
      "Buruku",
      "Gboko",
      "Guma",
      "Gwer East",
      "Gwer West",
      "Katsina-Ala",
      "Konshisha",
      "Kwande",
      "Logo",
      "Makurdi",
      "Obi",
      "Ogbadibo",
      "Ohimini",
      "Oju",
      "Okpokwu",
      "Oturkpo",
      "Tarka",
      "Ukum",
      "Ushongo",
      "Vandeikya",
    ],
    Borno: [
      "Abadam",
      "Askira/Uba",
      "Bama",
      "Bayo",
      "Biase",
      "Biu",
      "Chibok",
      "Damboa",
      "Dikwa",
      "Gubio",
      "Guzamala",
      "Gwoza",
      "Hawul",
      "Jere",
      "Kaga",
      "Kala/Balge",
      "Konduga",
      "Kukawa",
      "Kwaya Kusar",
      "Mafa",
      "Magumeri",
      "Maiduguri",
      "Marte",
      "Mobbar",
      "Monguno",
      "Ngala",
      "Nganzai",
      "Shani",
    ],
    "Cross River": [
      "Abi",
      "Akamkpa",
      "Akpabuyo",
      "Bakassi",
      "Bekwarra",
      "Biase",
      "Boki",
      "Calabar Municipal",
      "Calabar South",
      "Etung",
      "Ikom",
      "Obanliku",
      "Obubra",
      "Obudu",
      "Odukpani",
      "Ogoja",
      "Yakurr",
      "Yala",
    ],
    Delta: [
      "Aniocha North",
      "Aniocha South",
      "Bomadi",
      "Burutu",
      "Ethiope East",
      "Ethiope West",
      "Ika North East",
      "Ika South",
      "Isoko North",
      "Isoko South",
      "Ndokwa East",
      "Ndokwa West",
      "Okpe",
      "Oshimili North",
      "Oshimili South",
      "Patani",
      "Sapele",
      "Udu",
      "Ughelli North",
      "Ughelli South",
      "Ukwuani",
      "Uvwie",
      "Warri North",
      "Warri South",
      "Warri South West",
    ],
    Ebonyi: [
      "Abakaliki",
      "Afikpo North",
      "Afikpo South",
      "Ebonyi",
      "Ezza North",
      "Ezza South",
      "Ikwo",
      "Ishielu",
      "Ivo",
      "Izzi",
      "Ohaozara",
      "Ohaukwu",
      "Onicha",
    ],
    Edo: [
      "Akoko-Edo",
      "Egor",
      "Esan Central",
      "Esan North-East",
      "Esan South-East",
      "Esan West",
      "Etsako Central",
      "Etsako East",
      "Etsako West",
      "Igueben",
      "Ikpoba-Okha",
      "Orhionmwon",
      "Oredo",
      "Ovia North-East",
      "Ovia South-West",
      "Owan East",
      "Owan West",
      "Uhunmwonde",
    ],
    Ekiti: [
      "Ado Ekiti",
      "Efon",
      "Ekiti East",
      "Ekiti South-West",
      "Ekiti West",
      "Emure",
      "Gbonyin",
      "Ido Osi",
      "Ijero",
      "Ikere",
      "Ikole",
      "Ilejemeje",
      "Irepodun/Ifelodun",
      "Ise/Orun",
      "Moba",
      "Oye",
    ],
    Enugu: [
      "Aninri",
      "Awgu",
      "Enugu East",
      "Enugu North",
      "Enugu South",
      "Ezeagu",
      "Igbo Etiti",
      "Igbo Eze North",
      "Igbo Eze South",
      "Isi Uzo",
      "Nkanu East",
      "Nkanu West",
      "Nsukka",
      "Oji River",
      "Udenu",
      "Udi",
      "Uzo-Uwani",
    ],
    FCT: [
      "Abuja Municipal Area Council (AMAC)",
      "Bwari Area Council",
      "Gwagwalada Area Council",
      "Kuje Area Council",
      "Kwali Area Council",
      "Abaji Area Council",
    ],
    Gombe: [
      "Akko",
      "Balanga",
      "Billiri",
      "Dukku",
      "Funakaye",
      "Gombe",
      "Kaltungo",
      "Kwami",
      "Nafada",
      "Shongom",
      "Yamaltu/Deba",
    ],
    Imo: [
      "Aboh Mbaise",
      "Ahiazu Mbaise",
      "Ehime Mbano",
      "Ezinihitte",
      "Ideato North",
      "Ideato South",
      "Ihitte/Uboma",
      "Ikeduru",
      "Isiala Mbano",
      "Isu",
      "Mbaitoli",
      "Ngor Okpala",
      "Njaba",
      "Nkwerre",
      "Nwangele",
      "Obowo",
      "Oguta",
      "Ohaji/Egbema",
      "Okigwe",
      "Orlu",
      "Orsu",
      "Oru East",
      "Oru West",
      "Owerri Municipal",
      "Owerri North",
      "Owerri West",
    ],
    Jigawa: [
      "Auyo",
      "Babura",
      "Biriniwa",
      "Birnin Kudu",
      "Buji",
      "Dutse",
      "Gagarawa",
      "Garki",
      "Gumel",
      "Guri",
      "Gwaram",
      "Gwiwa",
      "Hadejia",
      "Jahun",
      "Kafin Hausa",
      "Kaugama",
      "Kazaure",
      "Kiri Kasama",
      "Kiyawa",
      "Maigatari",
      "Malam Madori",
      "Miga",
      "Ringim",
      "Roni",
      "Sule Tankarkar",
      "Taura",
      "Yankwashi",
    ],
    Kaduna: [
      "Birnin Gwari",
      "Chikun",
      "Giwa",
      "Igabi",
      "Ikara",
      "Jaba",
      "Jema'a",
      "Kachia",
      "Kaduna North",
      "Kaduna South",
      "Kagarko",
      "Kajuru",
      "Kaura",
      "Kauru",
      "Kubau",
      "Kudan",
      "Lere",
      "Makarfi",
      "Sabon Gari",
      "Sanga",
      "Soba",
      "Zangon Kataf",
      "Zaria",
    ],
    Kano: [
      "Ajingi",
      "Albasu",
      "Bagwai",
      "Bebeji",
      "Bichi",
      "Bunkure",
      "Dala",
      "Dambatta",
      "Dawakin Kudu",
      "Dawakin Tofa",
      "Doguwa",
      "Fagge",
      "Gabasawa",
      "Garko",
      "Garun Mallam",
      "Gaya",
      "Gezawa",
      "Gwale",
      "Gwarzo",
      "Kabo",
      "Kano Municipal",
      "Karaye",
      "Kibiya",
      "Kiru",
      "Kumbotso",
      "Kunchi",
      "Kura",
      "Madobi",
      "Makoda",
      "Minjibir",
      "Nasarawa",
      "Rano",
      "Rimin Gado",
      "Rogo",
      "Shanono",
      "Sumaila",
      "Takai",
      "Tarauni",
      "Tofa",
      "Tsanyawa",
      "Tudun Wada",
      "Ungogo",
      "Warawa",
      "Wudil",
    ],
    Katsina: [
      "Bakori",
      "Batagarawa",
      "Batsari",
      "Baure",
      "Bindawa",
      "Charanchi",
      "Dan Musa",
      "Dandume",
      "Danja",
      "Daura",
      "Dutsi",
      "Dutsin Ma",
      "Faskari",
      "Funtua",
      "Ingawa",
      "Jibia",
      "Kafur",
      "Kaita",
      "Kankara",
      "Kankia",
      "Katsina",
      "Kurfi",
      "Kusada",
      "Mai'Adua",
      "Malumfashi",
      "Mani",
      "Mashi",
      "Matazu",
      "Musawa",
      "Rimi",
      "Sabuwa",
      "Safana",
      "Sandamu",
      "Zango",
    ],
    Kebbi: [
      "Aleiro",
      "Arewa Dandi",
      "Argungu",
      "Augie",
      "Bagudo",
      "Birnin Kebbi",
      "Bunza",
      "Dandi",
      "Fakai",
      "Gwandu",
      "Jega",
      "Kalgo",
      "Koko/Besse",
      "Maiyama",
      "Ngaski",
      "Sakaba",
      "Shanga",
      "Suru",
      "Wasagu/Danko",
      "Yauri",
      "Zuru",
    ],
    Kogi: [
      "Adavi",
      "Ajaokuta",
      "Ankpa",
      "Bassa",
      "Dekina",
      "Ibaji",
      "Idah",
      "Igalamela-Odolu",
      "Ijumu",
      "Kabba/Bunu",
      "Kogi",
      "Lokoja",
      "Mopa-Muro",
      "Ofu",
      "Ogori/Magongo",
      "Okehi",
      "Okene",
      "Olamaboro",
      "Omala",
      "Yagba East",
      "Yagba West",
    ],
    Kwara: [
      "Asa",
      "Baruten",
      "Edu",
      "Ekiti",
      "Ifelodun",
      "Ilorin East",
      "Ilorin South",
      "Ilorin West",
      "Irepodun",
      "Isin",
      "Kaiama",
      "Moro",
      "Offa",
      "Oke Ero",
      "Oyun",
      "Pategi",
    ],
    Lagos: [
      "Agege",
      "Ajeromi-Ifelodun",
      "Alimosho",
      "Amuwo-Odofin",
      "Apapa",
      "Badagry",
      "Epe",
      "Eti-Osa",
      "Ibeju-Lekki",
      "Ifako-Ijaiye",
      "Ikeja",
      "Ikorodu",
      "Kosofe",
      "Lagos Island",
      "Lagos Mainland",
      "Mushin",
      "Ojo",
      "Oshodi-Isolo",
      "Shomolu",
      "Surulere",
    ],
    Nasarawa: [
      "Akwanga",
      "Awe",
      "Doma",
      "Karu",
      "Keana",
      "Keffi",
      "Kokona",
      "Lafia",
      "Nasarawa",
      "Nasarawa Egon",
      "Obi",
      "Toto",
      "Wamba",
    ],
    Niger: [
      "Agaie",
      "Agwara",
      "Bida",
      "Borgu",
      "Bosso",
      "Chanchaga",
      "Edati",
      "Gbako",
      "Gurara",
      "Katcha",
      "Kontagora",
      "Lapai",
      "Lavun",
      "Magama",
      "Mariga",
      "Mashegu",
      "Mokwa",
      "Munya",
      "Paikoro",
      "Rafi",
      "Rijau",
      "Shiroro",
      "Suleja",
      "Tafa",
      "Wushishi",
    ],
    Ogun: [
      "Abeokuta North",
      "Abeokuta South",
      "Ado-Odo/Ota",
      "Egbado North",
      "Egbado South",
      "Ewekoro",
      "Ifo",
      "Ijebu East",
      "Ijebu North",
      "Ijebu North East",
      "Ijebu Ode",
      "Ikenne",
      "Imeko Afon",
      "Ipokia",
      "Obafemi-Owode",
      "Odeda",
      "Odogbolu",
      "Ogun Waterside",
      "Remo North",
      "Shagamu",
    ],
    Ondo: [
      "Akoko North-East",
      "Akoko North-West",
      "Akoko South-East",
      "Akoko South-West",
      "Akure North",
      "Akure South",
      "Ese Odo",
      "Idanre",
      "Ifedore",
      "Ilaje",
      "Ile Oluji/Okeigbo",
      "Irele",
      "Odigbo",
      "Okitipupa",
      "Ondo East",
      "Ondo West",
      "Ose",
      "Owo",
    ],
    Osun: [
      "Aiyedade",
      "Aiyedire",
      "Atakunmosa East",
      "Atakunmosa West",
      "Boluwaduro",
      "Boripe",
      "Ede North",
      "Ede South",
      "Egbedore",
      "Ejigbo",
      "Ife Central",
      "Ife East",
      "Ife North",
      "Ife South",
      "Ifedayo",
      "Ifelodun",
      "Ila",
      "Ilesa East",
      "Ilesa West",
      "Irepodun",
      "Irewole",
      "Isokan",
      "Iwo",
      "Obokun",
      "Odo Otin",
      "Ola Oluwa",
      "Olorunda",
      "Oriade",
      "Orolu",
      "Osogbo",
    ],
    Oyo: [
      "Afijio",
      "Akinyele",
      "Atiba",
      "Atisbo",
      "Egbeda",
      "Ibadan North",
      "Ibadan North-East",
      "Ibadan North-West",
      "Ibadan South-East",
      "Ibadan South-West",
      "Ibarapa Central",
      "Ibarapa East",
      "Ibarapa North",
      "Ido",
      "Irepo",
      "Iseyin",
      "Itesiwaju",
      "Iwajowa",
      "Kajola",
      "Lagelu",
      "Ogbomosho North",
      "Ogbomosho South",
      "Ogo Oluwa",
      "Olorunsogo",
      "Oluyole",
      "Ona Ara",
      "Orelope",
      "Ori Ire",
      "Oyo East",
      "Oyo West",
      "Saki East",
      "Saki West",
      "Surulere",
    ],

    Plateau: [
      "Barkin Ladi",
      "Bassa",
      "Bokkos",
      "Jos East",
      "Jos North",
      "Jos South",
      "Kanam",
      "Kanke",
      "Langtang North",
      "Langtang South",
      "Mangu",
      "Mikang",
      "Pankshin",
      "Qua'an Pan",
      "Riyom",
      "Shendam",
      "Wase",
    ],
    Rivers: [
      "Abua/Odual",
      "Ahoada East",
      "Ahoada West",
      "Akuku-Toru",
      "Andoni",
      "Asari-Toru",
      "Bonny",
      "Degema",
      "Eleme",
      "Emuoha",
      "Etche",
      "Gokana",
      "Ikwerre",
      "Khana",
      "Obio/Akpor",
      "Ogba/Egbema/Ndoni",
      "Ogu/Bolo",
      "Okrika",
      "Omuma",
      "Opobo/Nkoro",
      "Oyigbo",
      "Port Harcourt",
      "Tai",
    ],
    Sokoto: [
      "Binji",
      "Bodinga",
      "Dange Shuni",
      "Gada",
      "Goronyo",
      "Gudu",
      "Gwadabawa",
      "Illela",
      "Isa",
      "Kebbe",
      "Kware",
      "Rabah",
      "Sabon Birni",
      "Shagari",
      "Silame",
      "Sokoto North",
      "Sokoto South",
      "Tambuwal",
      "Tangaza",
      "Tureta",
      "Wamako",
      "Wurno",
      "Yabo",
    ],
    Taraba: [
      "Ardo Kola",
      "Bali",
      "Donga",
      "Gashaka",
      "Gassol",
      "Ibi",
      "Jalingo",
      "Karim Lamido",
      "Kumi",
      "Lau",
      "Sardauna",
      "Takum",
      "Ussa",
      "Wukari",
      "Yorro",
      "Zing",
    ],
    Yobe: [
      "Bade",
      "Bursari",
      "Damaturu",
      "Fika",
      "Fune",
      "Geidam",
      "Gujba",
      "Gulani",
      "Jakusko",
      "Karasuwa",
      "Machina",
      "Nangere",
      "Nguru",
      "Potiskum",
      "Tarmuwa",
      "Yunusari",
      "Yusufari",
    ],
    Zamfara: [
      "Anka",
      "Bakura",
      "Birnin Magaji/Kiyaw",
      "Bukkuyum",
      "Bungudu",
      "Gummi",
      "Gusau",
      "Kaura Namoda",
      "Maradun",
      "Maru",
      "Shinkafi",
      "Talata Mafara",
      "Chafe",
      "Zurmi",
    ],
  };

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, [cartItems]);

  const openAddressPopup = useCallback(() => {
    setAddressPopupOpen(true);
  }, []);

  const closeAddressPopup = useCallback(() => {
    setAddressPopupOpen(false);
  }, []);

  const openEdit = useCallback(() => {
    setEdit(true);
  }, []);
  const closeEdit = useCallback(() => {
    setEdit(false);
  }, []);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/carts/${cartId}/`)
      .then((response) => {
        setCartItems1(response.data.items);
        setCount(response.data.total_items);
        setTotal(response.data.total_cost);
        setCartItems2(response.data.farmjointitems);

        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    {
      !isLoggedIn && (setStreet(""), setCity(""), setState(""));
    }
  }, []);

  const handleDelete1 = (itemId) => {
    axios
      .delete(`http://127.0.0.1:8000/carts/${cartId}/items/${itemId}/`)
      .then((response) => {
        console.log(response.data);
        return axios.get(`http://127.0.0.1:8000/carts/${cartId}/`);
      })
      .then((response) => {
        setCartItems1(response.data.items);
        setCount(response.data.total_items);
        setTotal(response.data.total_cost);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const handleDelete2 = (itemId) => {
    axios
      .delete(`http://127.0.0.1:8000/carts/${cartId}/fjitems/${itemId}/`)
      .then((response) => {
        console.log(response.data);
        return axios.get(`http://127.0.0.1:8000/carts/${cartId}/`);
      })
      .then((response) => {
        setCartItems1(response.data.items);
        setCount(response.data.total_items);
        setTotal(response.data.total_cost);
        setCartItems2(response.data.farmjointitems);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const payWithPaystack = () => {
    const reference = generateRandomSlug(10);
    const payment = PaystackPop.setup({
      key: "pk_test_9749b22c1b9b1200b434c5830576a5e4e7112910",
      email: email1,
      amount: total * 100,
      currency: "NGN",
      ref: reference,
      onClose: function () {
        alert("Payment window closed");
      },
      callback: function (response) {
        console.log(response);
        alert("Payment successful");
      },
    });
    payment.openIframe();
  };

  return (
    <div className={styles.confirmAdd}>
      <div className={styles.confirmAddChild} />
      <div className={styles.confirmAddItem} />

      <div className={styles.n20000}>₦{total}</div>
      <div className={styles.total}>Total</div>
      {isAddressPopupOpen ? (
        <>
          {total !== 0 ? (
            <button
              className={styles.confirmAddInner}
              onClick={payWithPaystack}
            >
              <b className={styles.makePayment}>MAKE PAYMENT</b>
            </button>
          ) : (
            <button className={styles.confirmAddInner1} disabled>
              <b className={styles.makePayment}>MAKE PAYMENT</b>
            </button>
          )}
        </>
      ) : (
        <>
          <button className={styles.confirmAddInner} onClick={openAddressPopup}>
            <b className={styles.makePayment}>CHECKOUT</b>
          </button>
        </>
      )}
      <div className={styles.lineDiv} />
      <div className={styles.contain}>
        {isEdit ? (
          <>
            <button className={styles.phxCircleLight} onClick={closeEdit}>
              <img className={styles.vectorIcon} alt="" src="/vector111.svg" />
            </button>
            <div className={styles.confirmAddress}>
              <span className={styles.confirm}>Confirm</span>
              <span className={styles.address}> Address</span>
            </div>
            <Input
              className={styles.confirmAddChild2}
              placeholder="House no."
              type="text"
            />
            <div className={styles.houseNo}>House No.</div>
            <Input
              className={styles.rectangleInput}
              placeholder="Street"
              type="text"
            />
            <div className={styles.street}>Street</div>
            <Stack className={styles.confirmAddChild1}>
              <Select
                options={options}
                isClearable={true}
                style={{ height: "10px" }}
                placeholder="- - Select State - -"
                onChange={handleStateChange}
                value={selectedState}
              />
            </Stack>

            <div className={styles.state}>State</div>
            <Stack className={styles.confirmAddChild3}>
              <Select
                id="localGov"
                variant="outline"
                placeholder="- - Select LGA - -"
                style={{ height: "10px" }}
                value={selectedLGA}
                onChange={(selectedOption) => setSelectedLGA(selectedOption)}
                options={
                  selectedState
                    ? localGov[selectedState.value].map((lga) => ({
                        value: lga,
                        label: lga,
                      }))
                    : []
                }
                isDisabled={!selectedState}
              />
            </Stack>
            <div className={styles.lga}>LGA</div>
            <button className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.confirm2}>Confirm</div>
            </button>
          </>
        ) : (
          <>
            {isAddressPopupOpen ? (
              <>
                <button
                  className={styles.phxCircleLight}
                  onClick={closeAddressPopup}
                >
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector111.svg"
                  />
                </button>

                <div className={styles.confirmAddress}>
                  <span className={styles.confirm}>Delivery </span>
                  <span className={styles.address}>Address</span>
                </div>
                <div className={styles.prestonEstateLekki1}>
                  {street ? `${street}, ${city}, ${state}.` : ""}
                </div>
                <button className={styles.rectangleParent1} onClick={openEdit}>
                  <div className={styles.groupChild} />
                  <div className={styles.confirm1}>Change Delivery Address</div>
                </button>
              </>
            ) : (
              <>
                <button className={styles.phxCircleLight} onClick={onClose}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector111.svg"
                  />
                </button>
                <div className={styles.confirmAddress}>
                  <span className={styles.confirm}>Your</span>
                  <span className={styles.address}> Cart</span>
                </div>
              </>
            )}
          </>
        )}

        <div className={styles.itemsInCart}>{count} Product(s) in cart</div>

        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild} />
          <div className={styles.groupWrapper}>
            <div className={styles.rectangleContainer}>
              <div className={styles.groupItem} />
              <div className={styles.contain1}>
                {cartItems1.map((item) => {
                  return (
                    <div className={styles.groupParent} key={item.id}>
                      <button
                        className={styles.phxCircleLight1}
                        onClick={() => {
                          handleDelete1(item.id);
                        }}
                      >
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector111.svg"
                        />
                      </button>
                      <img
                        className={styles.groupInner}
                        alt=""
                        src="/group-2666.svg"
                      />
                      <div className={styles.tomato}>{item.product.name}</div>
                      <div className={styles.n2000kg}>
                        ₦{item.product.sale_price || item.product.regular_price}
                        /kg
                      </div>
                      <div className={styles.n4000}>₦{item.total_price}</div>
                      <div className={styles.x2kg}>x{item.quantity}</div>
                      <img
                        className={styles.pngTomato187025Icon}
                        alt=""
                        src={item.product.images[0].image}
                      />
                    </div>
                  );
                })}
                {cartItems2.map((item) => {
                  return (
                    <div className={styles.groupParent} key={item.id}>
                      <button
                        className={styles.phxCircleLight1}
                        onClick={() => {
                          handleDelete2(item.id);
                        }}
                      >
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector111.svg"
                        />
                      </button>
                      <img
                        className={styles.groupInner}
                        alt=""
                        src="/group-2666.svg"
                      />
                      <div className={styles.tomato}>{item.item.name}</div>
                      <div className={styles.n2000kg}>
                        ₦{item.item.price}
                        /kg
                      </div>
                      <div className={styles.n4000}>₦{item.total_price}</div>
                      <div className={styles.x2kg}>x{item.quantity}</div>
                      <img
                        className={styles.pngTomato187025Icon}
                        alt=""
                        src={item.item.images[0].image}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
