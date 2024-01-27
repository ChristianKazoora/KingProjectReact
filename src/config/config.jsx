// import { Planet } from "../componets/globe/Planet2";
import { Sphere } from "../componets/globe/Sphere";
import img from "../assets/artPicture/2023/art2.png";
import img1 from "../assets/artPicture/2023/art2.png";
import img2 from "../assets/artPicture/2024/art.png";
import img3 from "../assets/artPicture/2024/art2.png";

const globeItems = [
  {
    id: 0,
    component: Sphere,
    props: { scale: 1.45 },
    link: "/art",
  },
  {
    id: 1,
    component: Sphere,
    props: { scale: 1.35 },
    link: "/poetry",
  },
  {
    id: 2,
    component: Sphere,
    props: { scale: 1.45 },
    link: "/blog",
  },
];
const blogItems = [
  {
    id: 0,
    year: "2023",
    month: "01",
    day: "05",
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!",
  },
  {
    id: 1,
    year: "2022",
    month: "02",
    day: "05",
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!",
  },
  {
    id: 2,
    year: "2021",
    month: "03",
    day: "05",
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!",
  },
  {
    id: 3,
    year: "2020",
    month: "04",
    day: "05",
    item: "Lorem\n ipsum dolor sit,\n amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!",
  },
  {
    id: 4,
    year: "2019",
    month: "05",
    day: "05",
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!",
  },
  {
    id: 5,
    year: "2018",
    month: "06",
    day: "05",
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!",
  },
  {
    id: 6,
    year: "2017",
    month: "05",
    day: "05",
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!",
  },
  {
    id: 7,
    year: "2016",
    month: "08",
    day: "05",
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!",
  },

  {
    id: 8,
    year: "2015",
    month: "05",
    day: "05",
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!",
  },
  {
    id: 9,
    year: "2014",
    month: "05",
    day: "05",
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!",
  },
  {
    id: 10,
    year: "2013",
    month: "05",
    day: "05",
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!",
  },
  {
    id: 11,
    year: "2012",
    month: "05",
    day: "05",
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!",
  },
  {
    id: 12,
    year: "2011",
    month: "05",
    day: "10",
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!",
  },
  {
    id: 13,
    year: "2011",
    month: "05",
    day: "09",
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!",
  },
  {
    id: 14,
    year: "2011",
    month: "05",
    day: "08",
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!",
  },
  {
    id: 15,
    year: "2011",
    month: "05",
    day: "07",
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!",
  },
  {
    id: 16,
    year: "2011",
    month: "05",
    day: "06",
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium provident dicta nesciunt eum quos autem possimus sunt a tenetur illo.Eligendi ut ipsam harum repellendus ipsum iusto, iste blanditiis.Provident voluptate dicta corrupti magni fugit! Debitis similique ipsa harum iure odit aperiam aliquam quae, eligendi veniam animi voluptates repudiandae possimus? Aliquid cumque provident facilis.Iusto excepturi veniam praesentium aliquid numquam corrupti rerum? Iusto hic odit sit similique quasi consequatur ex exercitationem maxime placeat porro ratione quam sunt culpa quaerat recusandae illum, ab ea quidem maiores.Dolore qui optio, tempore culpa placeat beatae ad, laudantium quae fugiat error molestiae praesentium perspiciatis!",
  },
];
const artItems = [
  { id: 0, year: "2023", item: img },
  { id: 1, year: "2023", item: img2 },
  { id: 2, year: "2022", item: img3 },
  { id: 3, year: "2022", item: img },
  { id: 4, year: "2024", item: img1 },
  { id: 5, year: "2023", item: img2 },
  { id: 6, year: "2023", item: img3 },
  { id: 7, year: "2023", item: img },
  { id: 8, year: "2023", item: img1 },
  { id: 9, year: "2023", item: img2 },
  { id: 10, year: "2023", item: img3 },
];
const poetryItems = [
  {
    id: 0,
    year: "2023",
    title: "Cat",
    item: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia odit odio dicta quod dolorem ipsum autem perferendis, beatae consectetur voluptatibus!",
  },
  {
    id: 1,
    year: "2023",
    title: "Dog",
    item: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia odit odio dicta quod dolorem ipsum autem perferendis, beatae consectetur voluptatibus!",
  },
  {
    id: 2,
    year: "2023",
    title: "Cow",
    item: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia odit odio dicta quod dolorem ipsum autem perferendis, beatae consectetur voluptatibus!",
  },
  {
    id: 3,
    year: "2024",
    title: "Cow",
    item: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia odit odio dicta quod dolorem ipsum autem perferendis, beatae consectetur voluptatibus!",
  },
  {
    id: 4,
    year: "2025",
    title: "Cow",
    item: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia odit odio dicta quod dolorem ipsum autem perferendis, beatae consectetur voluptatibus!",
  },
];

export { blogItems, artItems, poetryItems, globeItems };
