BEGIN
UPDATE [dbo].[Members]
SET [Title] = @title
    ,[FirstName] = @firstName
    ,[LastName] = @lastName
    ,[Gender] = @gender
    ,[PhoneNumber] = @phoneNumber
    ,[Email] = @email
    ,[DateOfBirth] = @dateOfBirth
    ,[Church] = @church
    ,[ChurchId] = @churchId
    ,[DateModified] = @dateModified

WHERE [Id] = @Id AND [IsDeleted] = 0

SELECT TOP (1000) [Id]
      ,[Title]
      ,[FirstName]
      ,[LastName]
      ,[Gender]
      ,[PhoneNumber]
      ,[Email]
      ,[DateOfBirth]
      ,[Church]
      ,[ChurchId]
      ,[DateCreated]
      ,[IsDeleted]
      ,[DateDeleted]
      ,[DateModified]
FROM [BirthdayReminder].[dbo].[Members]
WHERE [Id] = @Id AND [IsDeleted] = 0

END