import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import React from "react";
import "C:/Users/S27ra/Desktop/JSProj/bakeryapp/src/Css/ItemCard.css"

type ItemCardProps = {
  ItemName: string,
  Image?: string,
  Description?: string,
  Price?: number,
  MinMax?: number[]
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
       <CardContent>
          <Typography>
            Price: {Price}
          </Typography>
          <Typography>
            {Description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            <MoreVert/>
          </Button>
        </CardActions>
      </Card>
    )
}

export default ItemCard;


