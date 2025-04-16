import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

  import imagee from "../../../assets/Images/01.jpg";
  import image2 from "../../../assets/Images/33.jpg";
  import image3 from "../../../assets/Images/43.jpg";
  import image4 from "../../../assets/Images/39.jpg";
  import image5 from "../../../assets/Images/45.jpg";
  import image6 from "../../../assets/Images/06.jpg";
  import image7 from "../../../assets/Images/07.jpg";
  import image8 from "../../../assets/Images/08.jpg";
  import image9 from "../../../assets/Images/35.jpg";
  import image10 from "../../../assets/Images/44.jpg";
  import image11 from "../../../assets/Images/11.jpg";
  import image12 from "../../../assets/Images/12.jpg";
  import image13 from "../../../assets/Images/13.jpg";
  import image14 from "../../../assets/Images/14.jpg";
  import image15 from "../../../assets/Images/28.jpg";
  import image16 from "../../../assets/Images/16.jpg";
  import image17 from "../../../assets/Images/17.jpg";
  import image18 from "../../../assets/Images/18.jpg";
  import image19 from "../../../assets/Images/19.jpg";
  import image20 from "../../../assets/Images/20.jpg";
  import image21 from "../../../assets/Images/21.jpg";
  import image22 from "../../../assets/Images/22.jpg";
  import image23 from "../../../assets/Images/23.jpg";
  import image24 from "../../../assets/Images/24.jpg";
  import image25 from "../../../assets/Images/25.jpg";
  import image26 from "../../../assets/Images/26.jpg";
  import image27 from "../../../assets/Images/27.jpg";
  import image28 from "../../../assets/Images/28.jpg";
  import image29 from "../../../assets/Images/29.jpg";
  import image30 from "../../../assets/Images/30.jpg";


  export function AboutGallery() {
    const data = [
      {
        label: "Gallery 1",
        value: "1",
        images: [
          {
            imageLink: imagee
          },
          {
            imageLink: image2
          },
          {
            imageLink: image3
          },
          {
            imageLink: image4
          },
          {
            imageLink: image5
          },
          {
            imageLink: image6
          },
        ],
      },
      {
        label: "Gallery 2",
        value: "2",
        images: [
          {
            imageLink: image7
          },
          {
            imageLink: image8
          },
          {
            imageLink: image9
          },
          {
            imageLink: image10
          },
          {
            imageLink: image11
          },
          {
            imageLink: image12
          },
        ],
      },
      {
        label: "Gallery 3",
        value: "3",
        images: [
          {
            imageLink: image13 
          },
          {
            imageLink: image14
          },
          {
            imageLink: image15
          },
          {
            imageLink: image16
          },
          {
            imageLink: image17
          },
          {
            imageLink: image18
          },
        ],
      },
      {
        label: "Gallery 4",
        value: "4",
        images: [
          {
            imageLink: image19
          },
          {
            imageLink: image20
          },
          {
            imageLink: image21
          },
          {
            imageLink: image22
          },
          {
            imageLink: image23
          },
          {
            imageLink: image24
          },
        ],
      },
      {
        label: "Gallery 5",
        value: "5",
        images: [
          {
            imageLink: image25
          },
          {
            imageLink: image26
          },
          {
            imageLink: image27
          },
          {
            imageLink: image28
          },
          {
            imageLink: image29
          },
          {
            imageLink: image30
          },
        ],
      },
    ];
   
    return (
      <Tabs value="1">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="grid grid-cols-1 gap-4 ">
          {data.map(({ value, images }) => (
            <TabPanel
              className="grid grid-cols-2 gap-4 md:grid-cols-3"
              key={value}
              value={value}
            >
              {images?.map(({ imageLink }, index) => (
                <div key={index}>
                  <img
                    className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                    src={imageLink}
                    alt="image-photo"
                  />
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }