# Journal
This is a feature common on most DB engines.  Using the journal engine the updates are first
written to a journal and the changes are pushed across the different database engines.

Mongo uses write ahead logging to an on-disk journal files 

# Wired Tiger
This is the new storage engine for Mongo. It supports document level concurrency so
multiple clients can update documents in the collection at the same time.  Mongo DB uses a combination of snapshots (set every 60 seconds) and journal to keep data retention

# Journal Process
Every operation will result in a journal entry (including changes to the doucment and index updates)
Mongodb creates a directory under the 
dbPath/journal/WiredTigerLog.0000afs000

# Mongo Replica Sets

A Mongo Replica Set must have 1 Primary node which is where all the write operations are stored and a series of secondary nodes.

All changes on the primary are stored in a collectoin called the operation log.   The role of the secondary log is to replicate the data across the secondary process.

If the primary fails, there is an election where one of the secondary node will becomes the secondary node.

# Sharding

mongos - This is a router which routes the queries to the appropriate node where the traffic resides

configsrv - it holds information about the shards.  It holds location and ranges of the shards
