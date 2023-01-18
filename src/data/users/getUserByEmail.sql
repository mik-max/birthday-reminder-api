SELECT 
      [Id]
      ,[FirstName]
      ,[LastName]
      ,[Gender]
      ,[Email]
      ,[PhoneNumber]
      ,[Church]
      ,[ChurchId]
      ,[Role]
     ,[Password]
FROM [dbo].[Users]
WHERE [Email] = @email