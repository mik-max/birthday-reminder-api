BEGIN
INSERT INTO [dbo].[Members](
            [Title]
           ,[FirstName]
           ,[LastName]
           ,[Gender]
           ,[PhoneNumber]
           ,[Email]
           ,[DateOfBirth]
           ,[Church]
           ,[ChurchId]
           ,[DateCreated]
)
VALUES (
     @title,
     @firstName,
     @lastName,
     @gender,
     @phoneNumber,
     @email,
     @dateOfBirth,
     @church,
     @churchId,
     @dateCreated
);
END