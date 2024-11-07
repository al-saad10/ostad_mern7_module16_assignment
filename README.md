// Create Route


router.post("/create-blog",blogController.createBlog);  


It returns a message - ‘Blog created successfully’

![image](https://github.com/user-attachments/assets/371d9b15-a093-45cb-b4d4-780e08c5fad0)




// Read Route


router.get("/read-blog",blogController.readBlog);


It returns a message - ‘Blog read successfully’
![image](https://github.com/user-attachments/assets/16237277-efee-4911-8aed-d5fa6cab71fc)




// Update Route


router.put("/update-blog",blogController.updateBlog);


It returns a message - ‘Blog update successfully’

![image](https://github.com/user-attachments/assets/6931db08-f61f-4614-8cbe-6329819a620b)



// Delete Route


router.delete("/delete-blog",blogController.deleteBlog);


It returns a message - ‘Blog delete successfully’

![image](https://github.com/user-attachments/assets/9a090827-edb6-42ca-8114-cac4c424561b)


