export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const createHotel = await newHotel.save();
    res.status(200).json(createHotel);
  } catch (err) {
next(err)  
}};


export const updatedHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ); //to get the new update data
    res.status(200).json(updatedHotel);
  } catch (err) {
next(err)  
}};


export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);

    res.status(200).json("Hotel has been deleted");
  } catch (err) {
next(err) 
}};


export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    res.status(200).json(hotel);
  } catch (err) {
next(err)  
}};


export const getAllHotel = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  
}};
