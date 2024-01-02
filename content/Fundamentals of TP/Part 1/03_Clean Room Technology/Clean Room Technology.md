---
nextnote: "[[Lithography]]"
---

Clean rooms are environments where particulate concentration is reduced and kept under a specified level (usually also temperature and humidity are controlled).
Clean rooms are fundamental to prevent contamination which can create the following problems: it can **ruin devices**, leading to a lower yield and thus an increase of the manufacturing costs; it can **poison equipment** which has to be repaired, incrementing costs and slowing down production; moreover it can pose a **health risk** for the employees and other people involved in the manufacturing.

# Sources of contamination

Before finding a way to prevent contamination, it is important to know what are its main sources. Analysis show that the **human body** is the main source of airborne particles and that their number varies depending on the activity performed by the person. For this reason, depending on the class of the clean room, multiple layers of *clothing* have to be used to minimize contamination.

Other sources are the **machines** which can wear down and produce debris during normal operations; to mitigate this problem, in fact, they are often installed through the walls, in order to separate the clean side from the "dirty" side. Finally the **materials** and the **processes** used can create particles that need to be eliminated, for this reason it may be necessary to use high purity gasses (for example *Oxygen 4.0* where the *4* indicates the number of "9s" of purity, in this case 99.99%).

# Contamination induced problems

The presence of contaminants in the air can easily damage a product in multiple ways:

- **Change in electric fields**: if a material (for example a silicon wafer) comes in contact with a source of ions (for example the skin), its electrical properties can be drastically changed, to the point where it can no longer serve its purpose.
- **Unintentional films between layers**: contaminants can create nanometric films on the surfaces of a material which can prevent adhesion between two films or create unwanted open/short circuits.
- **Shadowing**: dust particles can create defects in photolithography processes by casting an unwanted shadow on the resists which, in turn, can ruin the final product.
- **Jamming**: dust particles can prevent the movement of micro electro-mechanical systems (MEMS).

# Clean room classification

The first standard for the classification of clean rooms was invented in the '60 and imposed specific limits in particles number and sizes, according to the plot below.

![[fed std 209.png|300]]

A class 100 for example have less than 100 particles greater than 0.5 $\mu$m per cubic foot). 
Particulate concentration can be directly measured with methods of filtering and counting (usually too slow) or with a suitable apparatus exploiting optical scattering of a laser beam (just like looking at particulate through a sun beam) where the number of scattering lines represents the number of particles and the angle is proportional to their size.

Nowadays the accepted standard, which has been updated by ISO, is stricter and more detailed.

# Designs

There are two main kinds of clean room designs: the first one is more expensive but offers better performances and consists in a room with a raised perforated floor through which air can pass, the second design is similar but instead of having the raised floor it has holes at the bottom of the walls; this design is cheaper but also less effective since it doesn't allow a laminar air flow (which minimizes the time spent in the room by a particle). 

![[clean room.png|500]]

## Laminar flow

Since laminar flow is so important for the performances of a clean room, the equipment  is build to minimize turbulence (special tables, through wall machinery, etc).

## Filters

Usually three kinds of filters are used to clean the air: the first step is using a HEPA filter (used also in cooker hood) this filters can retain 99.97% of particles with a diameter of 0.3$\mu$m (when talking about filter it if fundamental to state both the **filtering capability** and the **particle size** it refers to); the second step is a medium filter and the last step is an absolute filter which does most of the work. Filter wear can be estimated by measuring the pressure difference between the two sides (the fuller the filter, the higher the pressure difference).

# Deionized water

Since water is used extensively in washing steps, it is important that it doesn't contain particulates or contaminants; before being used it has to pass through a series of filters (ion-exchange resins and active carbons) to remove salts and organic materials. 
The purity can be evaluated by measuring its electric resistance (good values are 10-18 M$\Omega \cdot$cm).

