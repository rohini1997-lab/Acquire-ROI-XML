import { json2xml } from "xml-js";
import { writeFileSync } from "fs";
import { between } from "./random.js";

const locations = [
  {
    city: "Miami",
    state: "FL",
    country_code: "US",
    postal_code: "33101",
  },
  {
    city: "Lexington-Fayette",
    state: "KY",
    country_code: "US",
    postal_code: "40502",
  },
  {
    city: "New York",
    state: "NY",
    country_code: "US",
    postal_code: "10001",
  },
  {
    city: "San Francisco",
    state: "CA",
    country_code: "US",
    postal_code: "94105",
  },
  {
    city: "Seattle",
    state: "WA",
    country_code: "US",
    postal_code: "98101",
  },
  {
    city: "Washington",
    state: "DC",
    country_code: "US",
    postal_code: "20001",
  },
];

const getObj = (index) => {
  return {
    title: `<![CDATA[NEW JOB THOUD ${index}]]>`,
    description: `<![CDATA[New job description Thoud ${index}]]>`,
    company: `<![CDATA[CompanyThoud - X ${index}]]>`,
    ref_no: `<![CDATA[NEWREFTHOUD${index}]]>`,
    city: `<![CDATA[${locations[between(0, 5)].city}]]>`,
    state: `<![CDATA[${locations[between(0, 5)].state}]]>`,
    country_code: `<![CDATA[${locations[between(0, 5)].country_code}]]>`,
    postal_code: `<![CDATA[${locations[between(0, 5)].postal_code}]]>`,
    apply_url: `<![CDATA[https://www.google.com]]>`,
    schedule: `<![CDATA[full_time]]>`,
    pay_currency: `<![CDATA[USD]]>`,
  };
};

let arrayObj = [];

for (let i = 1; i <= 4998; i++) {
  arrayObj.push(getObj(i));
}

let xml = json2xml(
  { job: arrayObj },
  {
    spaces: 4,
    compact: true,
  }
);

xml =
  "<?xml version='1.0' encoding='UTF-8'?> <source>\n" + xml + "\n </source> ";

xml = xml.replaceAll("&lt;", "<").replaceAll("&gt;", ">");

//generate xml file from string
writeFileSync("jobs.xml", xml);
