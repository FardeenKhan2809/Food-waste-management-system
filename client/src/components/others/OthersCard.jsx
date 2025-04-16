import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import {OthersCollapse, OthersCollapse1, OthersCollapse2} from "./OthersCollapse";
  
  import waste from "../common/Images/waste.png";
  import farmer from "../common/Images/farmer3.png"; 
  import member from "../common/Images/Member1.png";


  export function OthersCard() {
    return (
      <Card className="w-full flex-row mt-6 mb-6 shadow-xl shadow-blue-gray-900/50">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
          color="green"
        >
          <img
            src={waste}
            alt="card-image"
            className="max-h-[22rem] w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h3" color="blue" className="mt-8 mb-2">
            Want to give your food waste.. ?
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Click below to make your food waste request...
          </Typography>
          <a href="/others/regularfwrequest" className="inline-block">
          <Button color="green" className="flex items-center gap-2">
            Food waste request
          </Button>
        </a>
        </CardBody>
      </Card>
    );
  }


  export function OthersCard1() {
    return (
      <Card className="w-full flex-row mt-6 mb-6 shadow-xl shadow-blue-gray-900/50" >
        <CardBody>
          <Typography variant="h3" color="blue" className="mt-8 mb-2">
            You want free Slurry.. ?
          </Typography>
          <Typography color="gray" className="ml-2 mr-2 mb-8 font-normal">
            Click below to get free slurry for you... We will validate your 
            request, and you can get slurry once in 15 days...
          </Typography>
          <a href="/request" className="inline-block">
          <Button color="green" className="flex items-center gap-2">
            Slurry request
          </Button>
        </a>
        </CardBody>
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-l-none"
          color="cyan"
        >
          <img
            src={farmer}
            alt="card-image"
            className="max-h-[22rem] w-full object-cover"
          />
        </CardHeader>
      </Card>
    );
  }

  export function OthersCard2() {
    return (
        <Card className="w-full flex-row mt-6 mb-6 shadow-xl shadow-blue-gray-900/50">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
            color="cyan"
          >
            <img
              src={member}
              alt="card-image"
              className="max-h-[22rem] w-full object-cover"
            />
          </CardHeader>
          <CardBody className="ml-6">
            <Typography variant="h3" color="blue" className="mt-8 mb-2">
              Want to become our member.. ?
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              Click below become our member...
            </Typography>
            <a href="/others/omembersform" className="inline-block">
            <Button color="green" className="flex items-center gap-2">
            Become member
            </Button>
            </a>
          </CardBody>
        </Card>
      );
  }
