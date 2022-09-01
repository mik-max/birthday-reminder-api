
BEGIN
INSERT INTO [dbo].[Users]
           ([FirstName]
           ,[LastName]
           ,[Gender]
           ,[Email]
           ,[PhoneNumber]
           ,[Church]
           ,[ChurchId]
           ,[Role]
           ,[Password]
           ,[DateCreated])


VALUES (
     @firstName,
     @lastName,
     @gender,
     @email,
     @phoneNumber,
     @church,
     @churchId,
     @Role,
     @password,
     @dateCreated
);
END