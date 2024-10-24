import { Card, CardBody, Avatar, Typography, IconButton } from "@material-tailwind/react";
import generateAlt from "../../../../helpers/generateAlt";

function SkillsCard({ img, title, subtitle }) {
    return (
      <Card className="rounded-lg bg-[#FAFAFA] duration-300 hover:scale-[1.02]" shadow={true}>
        <CardBody className="text-center min-h-[370px]">
          <div className="overflow-hidden rounded-full w-[100px] h-[100px] mx-auto border shadow-md">
            <img src={img} alt={generateAlt(img)} className="w-full h-full object-cover"/>
          </div>
          <Typography variant="h1" color="black" className="!font-medium text-lg">
            {title}
          </Typography>
          <Typography variant="h6" color="blue-gray" className="!font-medium text-lg mt-3">
            {subtitle}
          </Typography>
        </CardBody>
      </Card>
    );
}

export default SkillsCard;