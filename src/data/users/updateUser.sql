BEGIN
UPDATE [dbo].[Users]
SET [FirstName] = @firstName
   ,[LastName] = @lastName
   ,[Gender] = @gender
   ,[Email] = @email
   ,[PhoneNumber] = @phoneNumber
   ,[Church] = @church
   ,[ChurchId] = @churchId
   ,[Role] = @role
   ,[DateModified] = @dateModified
WHERE [Id] = @Id

SELECT [Id]
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
WHERE [Id] = @Id
END