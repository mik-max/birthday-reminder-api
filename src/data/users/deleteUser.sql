BEGIN
UPDATE [dbo].[Users]
SET 
   [IsDeleted] = 1
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