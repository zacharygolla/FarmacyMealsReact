import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FoodModel } from "../../../models/FoodModel";
import { setCartData } from "../../../slices/cartSlice";
import FoodModal from "../foodModal/foodModal";

interface Props {
    food: FoodModel
}

const FoodCard: React.FC<Props> = ({ food }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleCartUpdate = () => {  
    // Dispatch an action to update the data in your store
    dispatch(setCartData({
      name: food.name,
      price: food.price,
      imagePath: food.imagePath,
      iconPath: food.iconPath,
      quantity: 1,
      itmType: 'food',
    })); // Replace 'UPDATE_DATA' with your actual action type
  };

  return (
    <>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image={food.imagePath}
          title={food.name}
        />
        <CardContent>
          <Typography sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            }}  gutterBottom variant="h5" component="div">
          {food.name}
          </Typography>
          <Typography sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            }} variant="body2" color="text.secondary">
              {food.description || '\u00A0'}
          </Typography>
        </CardContent>
        <CardActions>
        <Button variant="contained" color="primary" onClick={handleCartUpdate}>Add to Cart</Button>
          <Button size="small" onClick={handleOpen}>Details</Button>
        </CardActions>
      </Card>
      <FoodModal food={food} open={modalOpen} handleClose={handleClose} />
    </>
  );
}
export default FoodCard
