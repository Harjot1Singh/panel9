/* Stores query text */

module.exports = {
    createTables: `
        CREATE TABLE IF NOT EXISTS Users (
        	Email text,
        	Name text,
        	Password text
        );
        
        CREATE TABLE IF NOT EXISTS Workspaces (
        	Name text,
        	Creator text,
        	KillAfter integer
        );
        
        CREATE TABLE IF NOT EXISTS WorkspaceUsers (
        	Email text,
        	Workspace text,
        	WriteAccess integer
        );`
};