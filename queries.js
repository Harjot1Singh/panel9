/* Stores query text */

module.exports = {
    createTables: `
        CREATE TABLE IF NOT EXISTS Users (
        	email text,
        	password text
        );
        
        CREATE TABLE IF NOT EXISTS Workspaces (
        	name text,
        	killAfter integer
        );
        
        CREATE TABLE IF NOT EXISTS WorkspaceUsers (
           	email text,
	        name text,
	        workspace text,
	        writeAccess integer,
	        isAdmin integer
        );`,
    getWorkspaces: `
        SELECT * 
        FROM WorkspaceUsers 
        WHERE email = ?;
        `,
    getWorkspace: `
        SELECT * 
        FROM WorkspaceUsers 
        WHERE workspace = ?;
        `,
    createWorkspace: `
        INSERT INTO Workspaces 
        VALUES (?,?,?,?);
    `
};