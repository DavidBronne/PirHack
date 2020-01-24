# Idea

<u>You are:</u> Pirate.

<u>You want to:</u> reach the Treasure Island.

<u>Problem:</u> 

- Your best enemy.
- An army behind.
- Your boat is pushed away by:
  - Water stream.
  - Wind shift.

<u>How to fix it?</u> Sail upstream according to wind and water shifts by:

- managing boat direction
- managing sail set up

<u>You win if:</u> You reach the island before your enemy.

<u>You loose if:</u>

- the water stream takes you off
- your enemy reach the island before you

# Major parameters

- Island position
- Army position
- Enemy duration for reaching the island
- Water stream:
  - Intensity
  - Direction
  - shift
- Wind:
  - Intensity
  - Direction
  - shift
- Autopilot : managing the boat direction
  - -X degrees
  - +X degrees
- Sail setting: Y states
  - Pull
  - Release
- Boat efficiency (zone: 0->5): function of the angle calculated based on:
  - Water stream
  - Wind
  - Boat direction
  - Sail setting
- Score is function of time spent to reach the island
- Game Over view:
  - Score
  - time spent in each efficiency zone
  - Reset button
- Start view:
  - Start  button
  - Levels:
    - Water stream shift frequency
    - Wind shift shift frequency









