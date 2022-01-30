import { Card, CardHeader, CardMedia } from "@mui/material";
import React from "react";

type ItemCardProps = {
  ItemName: string,
  Image: string,
  Description: string,
  Price: number,
  MinMax: number[]
}


const ItemCard: React.FC<ItemCardProps> = ({ItemName, Image, Description, Price, MinMax}): JSX.Element => {
    return (
      <Card sx={{maxWidth: 300}}>
        <CardHeader
          title={ItemName}
        />
        <CardMedia
          component="img"
          image={Image}
          height={300}
          width={400}
        />
      </Card>
    )
}

export default ItemCard;


