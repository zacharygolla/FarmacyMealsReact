import { Button, Card, CardActions, CardContent, Modal, Typography } from "@mui/material";
import { FoodModel } from "../../../models/FoodModel";

interface Props {
    food: FoodModel
    open: any
    handleClose: any
}

const FoodModal: React.FC<Props> = ({ food, open, handleClose }) => (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {food.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {food.description || '\u00A0'}
                    </Typography>
                    {/* Add more detailed information about the food */}
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" onClick={handleClose}>
                        Close
                    </Button>
                </CardActions>
            </Card>
        </div>
    </Modal>
);

export default FoodModal;