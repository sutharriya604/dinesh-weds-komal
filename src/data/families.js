// ======================================================================
//  FAMILY DATA — yaha naam aur photo badlo
//
//  Har member me:
//    names    : ["Naam"]  -> single photo wala card
//               ["Pati/Papa", "Patni/Mummy"] -> COUPLE card (ek couple photo)
//    relation : chhota label (jaise "Tauji & Taiji")
//    photo    : photo ka path. Photo `public/photos/family/` folder me rakho.
//               Photo na ho to sundar placeholder dikhta hai.
//
//  Naya member jodne ke liye bas ek line copy karke us group me paste karo.
//  Kisi bache ki shadi ho gayi ho to uske card me 2 naam likh do (couple ban jayega),
//  single ho to 1 naam.
// ======================================================================
export const families = [
  {
    id: "groom",
    title: "Groom's Family",
    couple: "Dinesh Suthar",
    groups: [
      {
        title: "Grand Parents",
        members: [
          { names: ["Kapoor ji Suthar", "Daku Devi"], relation: "Dada & Dadi", photo: "/photos/family/Dada-dadi.jpeg" },
        ],
      },
      {
        title: " Parents & Uncles & Aunts",
        oneLine: true, // teeno ek hi line me
        members: [
           { names: ["Naresh Kumar", "Pushpa Devi"], relation: "Father & Mother", photo: "/photos/family/groom-parents.jpeg" },
          { names: ["Sohanlal Suthar", "Manju Devi"], relation: "Bade Papa & Badi Mammi", photo: "/photos/family/SS.jpeg" },
          { names: ["Ramesh Suthar", "Indra Devi"], relation: "Uncle & Aunty", photo: "/photos/family/RK.jpeg" },
          { names: ["Sharavan Suthar", "Tara Devi"], relation: "Uncle & Aunty", photo: "/photos/family/SK.jpeg" },
        ],
      },
      {
        title: "Brother & Sisters",
        members: [
          { names: ["Yash Suthar"], relation: "Brother", photo: "/photos/family/Yash.jpg" },
          // Dono behno ki shaadi ho chuki hai -> couple card
          { names: ["Heena Suthar","Vinod ji"], relation: "Sister & Jijaji", photo: "/photos/family/groom-heena.jpeg" },
          { names: ["Priyanka Suthar", "Bhavesh ji"], relation: "Sister & Jijaji", photo: "/photos/family/groom-priyanka.jpeg" },
        ],
      },
      {
        title: "Cousin Sisters",
        members: [
          // In 2 cousin sisters ki shaadi ho chuki hai -> couple card
          { names: ["Lata", "Hemant ji"], relation: "Cousin Sister & Jijaji", photo: "/photos/family/Lata.jpeg" },
          { names: ["Urmila", "OmPrakash ji"], relation: "Cousin Sister & Jijaji", photo: "/photos/family/Urmila.jpeg" },
          { names: ["Asha Suthar"], relation: "Cousin Sister", photo: "/photos/family/Asha.jpeg" },
          { names: ["Riya Suthar"], relation: "Cousin Sister", photo: "/photos/family/Riya.jpeg" },
          { names: ["Bhavika SuthaSuthar"], relation: "Cousin Sister", photo: "/photos/family/Bhavika.jpeg" },
        ],
      },
      {
        title: "Cousin Brothers",
        members: [
          { names: ["Sanjay Suthar"], relation: "Cousin Brother", photo: "/photos/family/Sanjay.jpeg" },
          { names: ["Yuvrsaj Suthar"], relation: "Cousin Brother", photo: "/photos/family/Yuvraj.jpeg" },
          { names: ["Ishan Suthar"], relation: "Cousin Brother", photo: "/photos/family/Ishan.jpeg" },
          { names: ["Sidarth Suthar"], relation: "Cousin Brother", photo: "/photos/family/Sidarth.jpeg" },
        ],
      },
    ],
  },
  {
    id: "bride",
    title: "Bride's Family",
    couple: "Komal Suthar",
    groups: [
      {
        title: "Parents, Uncle & Aunt",
        oneLine: true, // parents aur uncle-aunty ek hi line me
        members: [
          { names: ["Mahendra Kumar", "Manju Devi"], relation: "Father & Mother", photo: "/photos/family/MK.jpeg" },
          { names: ["Naresh Kumar", "Neema Devi"], relation: "Uncle & Aunty", photo: "/photos/family/NK.jpeg" },
        ],
      },
      {
        title: "Brother & Sister",
        members: [
          { names: ["Bhavesh Suthar", "Priyanka Suthar"], relation: "Brother & Bhabhi", photo: "/photos/family/groom-priyanka.jpeg" },
          { names: ["Riya Suthar"], relation: "Sister", photo: "/photos/family/Riyak.jpeg" },
        ],
      },
      {
        title: "Cousins",
        members: [
          { names: ["Jayesh Suthar "], relation: "Cousin Brother", photo: "/photos/family/Jayesh.jpeg" },
          { names: ["Diksha Suthar"], relation: "Cousin Sister", photo: "/photos/family/Diksha.jpeg" },
        ],
      },
    ],
  },
];