import User from "../models/user.model.js";

export const getusersForSidebar  = async (req, res) => {

    try{

         const loggedInUserId = req.user._id; // Get the logged-in user's ID from the request

         const filterUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password"); // Exclude the logged-in user from the list
          
         res.status(200).json(filterUsers); // Send the filtered    

    }
    catch (error) {
        console.log("Error in getUsersForSidebar:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }

}