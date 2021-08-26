# bpmotd -- BPM of the day

Are you building a user interface and struggling to find just the right time interval for a flashing light, a repeated beep, a vibration pattern, or anything else with periodic behaviour?

Not only that, but you also love music?

Let this little library choose the right tempo for you!

Every day (at UTC midnight), it generates a pseudorandom tempo between 80 and 159 BPM inclusive.

If enough people use this, everything around you will flash, beep, or vibrate at the same tempo, which will be extremely beautiful.

Example usage:

```
const { getBPMForDay, getBPMForToday } = require('./bpmotd');

console.log(getBPMForDay('2021-08-26'));
console.log(getBPMForToday());
```
