## Bulk micromachining

Bulk micromachining is a process that consists in the **selective removal** of the bulk substrate to release suspended 3D structures. These structures are made of the same bulk material or of a thin film applied to it.

Bulk micromachining is less versatile than **surface micromachining** but allows for the removal of bigger regions.

Bulk micromachining uses the same techniques seen in [[Wet and dry etching|wet and dry etching]] to release the desired structures.

![[bulk microm.png|400]]

### P++ etch stop

To stop the etching process, it is possible to create a heavily doped p region (darker in the image below), which etches really slowly compared to lightly doped or undoped silicon. The most selective etchant for this purpose is EDP.

![[p++ etch stop.png|200]]

### Electrochemical etch stop

Electrochemical etch stop is another etch stop technique used in wet etching. 
The process combines two effects: the first one is the fact that silicon oxidizes if a current flows through it, the second one is the fact that the etchant used has a high selectivity and doesn't etch $SiO_2$.

The etch stop is provided by the use of a reverse biased p-n junction which stops the current flow as long as the p substrate isn't completely etched. The result is that the position of the p-n junctions defines what is etched and what isn't.

![[electrochemical etch stop.png|600]]
The setup consists in an acid bath ($KOH$) where the wafer is submerged. Differently from what happened in classical wet etching, in this case the wafer is protected by an enclosure which prevent the etchant from reaching unwanted sides. Moreover the n side of the wafer is connected to the positive end of a voltage generator such that the p-n junction is revers biased, the other end is connected to a counter electrode; this makes sure that the circuit remains an open circuit. As time passes the p substrate is etched away and the process continues as long as the etchant reaches the n layer. At this moment there is nothing stopping the current flow (no more p-n junction) and the n layer of silicon oxidizes stopping the reaction.

## Surface micromachining

Surface micromachining is a technique that is used to form suspended microstructures out of thin layers of different materials.
Compared to bulk micromachining this technique is more involved but also more versatile and it can provide better resolution.


![[bulk vs surface microm.png|400]]

A key component that is required to perform surface micromachining are **sacrificial layers**, which are thin films required to support the structure to be formed during the process but that need to be finally removed. Opposed to sacrificial layers are **structural layers** which are the one that will remain after the end of the process.

Surface micromachining is often used to create MEMS.

### Selection of materials and etchants

For what concerns the etchant it is obviously important to choose the one with the proper trade off between **etch rate** and **selectivity**. It is also important to select the right **deposition temperature** for the various layers that make up the structure. This consideration does not concern the sacrificial layer since it will be removed anyway.
For optical applications it is also important to evaluate the surface **smoothness** left by the process.

The last important thing to take into account is the **intrinsic stress** of the structural layer which could cause the rupture or the bending of the film once it is release from the rest of the material.

![[internal stress.png|400]]

### Evaporation drying

#todo 

### Release stiction

Another issue that can arise from the rinsing step is the fact that the microstructures can stick to the substrate due to **Van der Waals** forces and **hydrogen bonding** that cause the formation of a liquid **meniscus**. This is not an issue if the structures can be released after drying but this is not always the case.

![[stiction.png|400]]

To prevent stiction there are several possible solutions:

- Use **low surface tension** liquids such as methanol.
- Reduce the adhesion area by introducing dimples or **bumps** in the design.
- Integrate **support microstructures** that keep the features stable for the whole process and that can be removed in the end. An example of support structures are micro-fuses which can be electrically destroyed at the end of the process.

![[dimples bumps.png|300]]

Another method could be evaporating the liquid to release the structures; the problem with this is that at microscopic levels crossing the liquid to gas boundary can cause too much stress. There are two possible ways to avoid this:

- Avoid passing from liquid to gas directly by exploiting **sublimation drying**. In this method the liquid is frozen and then the pressure is lower to sublimate the residue. This technique cannot be used with water since it expands as it freezes.
- Pass from liquid to gas by using $CO_2$ **supercritical drying**. This method passes through the supercritical region where there is no more distinction between liquid and gas. 

The last solution is to avoid wet etching altogether and used vapor **phase etching**.

![[stiction drying.svg|500]]

## Wafer bonding

Wafer bonding is a technique used to stick two or more wafers one on top of the other to create complex mechanical systems that couldn't be build in other ways. It is possible for example to create motors, sensors, pumps and so on but also for [[Packaging|packaging]].

In the picture below we can see an example of micro-pump. The working principle is similar to the one of a normal pump but in this case the pressure difference is create by applying a voltage to a parallel plate capacitor with one flexible plate (dark horizontal lines). This causes the flow of liquid from the inlet to the pump chamber. When the pump diaphragm relaxes the inlet gets sealed by the pressure and the liquid can flow through the outlet.

![[micro pump.png|300]]

There are three classes of wafer bonding:

- Heat assisted bonding
- Electrical field assisted bonding
- Chemistry assisted bonding

In all the cases it is fundamental to correctly prepare the surface before proceeding since even microscopic particles can create large defects in the final result. A 1 $\mu$m particle, for instance, can cause a void as large as 1cm in diameter when direct-bonding 8in wafers.

![[bonding defects.png|400]]

### Fusion (or direct) bonding

Fusion bonding is used to bond together silicon based wafers (e.g. $Si/Si$, $Si/SiO_2$, $SiO_2/SiO_2$). 

The results are a nearly perfect high strength bond with only a **nanometric $SiO_2$ layer seam**.

The process is simple and uses high temperatures and high pressures to bring the two polished surfaces in contact with each other.

![[fusion bonding.png|250]]

Since high temperature are involved, this method should not be used for wafers with temperature sensitive devices.

### Anodic bonding

The field assisted glass-silicon sealing, also referred to as anodic bonding, is a process which permits the sealing of **silicon to glass** well below the softening point of the glass. For the method to work properly, the two surfaces must have a surface roughness of less than 0.1 $\mu$m so that they can properly bond.

The pieces to be bonded are assembled and heated on a hot plate at atmospheric pressure to a temperature between 400 and 500°C (a relatively **low temperature** if compared to fusion bonding). A DC power supply is connected to the assembly such that the **silicon is positive** with respect the glass. When a voltage on the order of some hundreds volts is applied across the assembly the glass seals to the silicon. No external force is necessary.

![[anodic bonding.png|400]]

The main limitation of this method is that it requires the two material to have a very **similar thermal expansion coefficient** (for silicon we use Pyrex 7740). If this is not the case they would expand by different amounts during the heating phase and, when cooling down, they one of them would crack due to the stress caused by the other one.

Even though the temperature is lower compared to the previous case and there is no external load, the conditions are still very harsh and thus the process is not suitable for wafers with active components.

#### Working principle

The mechanism involved in the bonding process is attributed to mobile **positive ions** in the glass whose mobility is increased by the elevated temperature. 
The ions are attracted towards the cathode placed on the glass and this forms a negative charged region at the glass-silicon interface which pulls the two surfaces together, acting as the external load in the fusion bonding.

![[anodic bonding working.png|400]]
It is important to constantly monitor the current to detect when the bond is complete and avoid breakdown.

### Glass frit bonding

This technique is different from the other two since it uses a sort of "glue" to bond the two surface together. This allows for lower temperature bonding (as low as 160$^{\circ}$C) but provides a less effective bond.
The "glue" used is a low melting point glass layer (the glass frit).

The fact that a external material is used to bind the two surfaces together has other advantages: we have a higher **selections of materials** to bind together, the glass frit can be patterned to achieve **localized bonding**, it can compensate for **surface imperfections**.

![[glass frit.png|300]]

## Micro injection moulding

## Hot embossing

## In situ casting

## Global planarization

## Chemical-mechanical polishing

## Laser machining

## Additive manufacturing

### Micro stereolithography

### Inkjet printing

### Two photon polymerization (2PP)