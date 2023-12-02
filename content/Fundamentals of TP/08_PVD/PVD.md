In physical vapour deposition a film is grown on the substrate by the **condensation** of a vapor. 

Compared to [[#Chemical Vapour Deposition (CVD)|CVD]], where there was a chemical bonding of the film to the substrate, in PVD there is only a physical bonding: the material "sticks" to the **cold surface**.

## Thermal evaporation

Thermal evaporation allows to deposit a limited amount of material (mostly metals). The process happens in a vacuum chamber where the material to be deposited is evaporated. The high vacuum allows to increase the **mean free path**, which is the distance travelled by the molecules of the gas before colliding with another molecule. A high mean free path is important because it allows the molecules to propagate in a straight line.

The vacuum chamber hosts the wafer (which is held upside down to reduce particulates) and a hot crucible that holds the material. The crucible is sealed by a shutter that can be controlled to achieve the right thickness.

Since the vapour travels mostly in straight lines and the wafer is cold (no surface migration), the results are highly unconformal.

![[thermal evaporation conformality.png|400]]

### Crucible selection

Since the crucible is in direct contact with the material, it is important to select a crucible that will not react with it. Moreover, the crucible has to be conductive since it is heated by Joule effect; the most common choices are $W$, $Ta$, $Mo$ and $C$.

If it not possible to find a suitable material, there are crucibles made from non conductive refractive material (ceramics) that contain a metal wire that heats up.

### Advantages and disadvantages

Thermal evaporation has an high deposition rate but it is important to choose the right crucible for the job. Also, not every material can be evaporated: $W$ is nearly impossible, $Mo$ and $Pt$ are extremely difficult.

## E-beam evaporation

In e-beam evaporation a conductive filament is heated up to electron emission. Electrons are then accelerated and deviated with a magnetic field to hit the material placed in a crucible (called **liner**). Since the liner is water cooled, there is no risk of contamination and the magnetic deviation separates the electrons from possible contaminants.

In industrial setups, one chamber can contain multiple liners, allowing for multiple evaporations without breaking the vacuum. This is extremely important not only for speed, but also to prevent material from oxidizing when they come in contact with air.

Being able to deposit multiple material one after the other can be helpful to exploit the advantages of different materials: for example a gold layer can be used for **passivation** (protection) and an aluminium layer for good conductivity at a lower price.

## Sputtering

Sputtering is a technique that consists in bombarding the material we want to deposit (the target) with ions or atoms with high kinetic energy (usually $Ar^{+}$). The ions are accelerated by a plasma.

The advantage of sputtering is that the it has no limitations on the materials that can be deposited but it is more expensive compared to the previous techniques and can cause more contamination.

Similarly to [[#Plasma Enhanced CVD (PECVD)|PECVD]] there are two variations of sputtering based on the type of voltage used.

### DC sputtering

In DC sputtering the substrate is placed at the positive potential and the target (the material to be eroded) at the negative. Several hundred volts are applied in order to form a plasma which accelerates the Argon ions. The ions hit the target and dislodge its atoms which fly off and stick to the substrate.

#todo only conductive ?

### RF sputtering

#todo 

### Conformality and step coverage

Compared to evaporation, sputtering is **more conformal** since the source of the material is wider (in evaporation it was point like). This leads to the particles to arrive at the substrate with different angles so that they can "fill" even tighter areas.

![[sputtering conformality.png|400]]

Since the substrate is kept cold, the atoms that hit its surface stick immediately and there is no surface migration. This causes the top faces to grow faster, making the issue even worse.

![[sputtering step coverage.png|400]]

### Magnetron sputtering

Magnetron sputtering aims at improving performances of the two previous methods increasing the **ionization degree** of the atoms in the plasma. Increasing the ionization degree (the number of atoms ionized) it is in fact possible do deposit more material at a given pressure. This also means that it is possible to maintain the deposition time constant decreasing the pressure (and thus reducing contamination).

The goal is achieved by introducing a magnetic field perpendicular to the electric field in order to put the electrons in a helical orbit. Since the new orbit will be longer, the electrons will have more chances of hitting an atom and ionizing it.

The main disadvantage of this method is that the target is eroded non uniformly (due to the circular paths of the electrons); this can make part of the material unusable (unless "recycled"), increasing the costs.

### Reactive sputtering

Reactive sputtering is a technique that can be used both for depositing **dielectric materials** and for adjusting the **stoichiometry** of the deposited material. 

The mechanism is similar to DC sputtering but, in this case, the gas that forms the plasma is reactive and will be incorporated in the newly deposited film.

For example, if we want to deposit $Al_2 O_3$ we can use oxygen to bombard as aluminium target.

### Ionized sputtering / HDP sputtering

Ionized sputtering aims at creating a highly **non conformal** layer. 

#todo DC or RF ?

![[ionized sputtering.png|400]]


#todo A typical application of this method is depositing material at the bottom of trenches. For example when creating vias it is important to place a thin $Ti$ (?) layer between $Al$ and $W$ which are incompatible.

# Electroplating

Electroplating is the oldest deposition technology due to the simplicity of the apparatus.

The simplest form uses:
- A bath consisting of an electrolyte containing metal-ions
- An electrode or substrate on which the deposition is desired
- A counter electrode 
- An external power supply

When a current flows through the electrolyte:
1) cations move toward the cathode
2) anions move towards the anode
3) they may deposit on the electrodes after undergoing a charge transfer reaction (incorporation of metal into the solid)


#todo Write better

Before doing the procedure above, a conductive **seed layer** has to be created for the process to occur. This layer can be deposited with another technique (e.g. lithography + PVD). As well as being conductive all the places that we want to electroplate need to be **electrically connected** to the electrical contact, otherwise the process will not happen.

![[electroplating.png|500]]
