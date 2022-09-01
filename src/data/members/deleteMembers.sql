UPDATE [dbo].[Members]
SET [IsDeleted] = 1
    ,[DateModified] = @dateModified

WHERE [Id] = @Id AND [IsDeleted] = 0