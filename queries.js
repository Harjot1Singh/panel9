/* Stores query text */

module.exports = {
    createTables: `
        CREATE TABLE IF NOT EXISTS Users (
        	email text PRIMARY KEY,
        	password text
        );
        
        CREATE TABLE IF NOT EXISTS Workspaces (
        	name text PRIMARY KEY,
        	killAfter integer
        );
        
        CREATE TABLE IF NOT EXISTS WorkspaceUsers (
           	email text,
	        workspace text,
	        writeAccess integer,
	        isAdmin integer,
	        UNIQUE (email, workspace)
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
        VALUES (?,?);
    `,
    addToWorkspace: `
        INSERT INTO WorkspaceUsers 
        VALUES (?,?,?,?);
        `
};