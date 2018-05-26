# On Golden Pond

This is an application created for DotAlign's Interview Assignment.
My app is currently live on heroku: https://on-golden-pond.herokuapp.com/

Data can be manualy inputed with the provided prompts.

Data can also be inputed in the form of raw data.

**Ex:** This is a grid with (0,0) on the bottom left and (5,5) on the top right. There are two ducks. 
The first duck's initial position is (1,2) facing North. The second duck's initial position is (3,3)
facing east. The duck's instructions follow the initial position. Duck one will follow this: PFPFPFPFF.
Duck two will follow this: FFSFFSFSSF. 'F' moves the duck forward, 'P' spins the duck 90 degrees toward 
the left side,'S' spins the duck 90 degrees toward the right side.
```
5 5  
1 2 N  
PFPFPFPFF  
3 3 E  
FFSFFSFSSF
```

Due to screen real estate, the max grid size is limited to (25,25)

## Test

To test it online, the heroku url can be visited.  
To test it localy, git, node and npm need to be installed.  
- After installation, git clone the repo
- cd On-Golden-Pond/on-golden-pond/
- npm install
- npm start
- The site should start up on http://localhost:3000/
