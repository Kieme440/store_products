export function GetAllCategories(req, res){
    res.status(200).send("These are the lists");
};

export function UpdateCategory(req, res){
    res.status(201).send("category updated");
};

export function CreateNewCategory(req, res){
    res.status(200).send("category created");
};

export function deleteCategory(req, res){
    res.status(200).send("category deleted");
};