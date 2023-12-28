---
nextnote: "[[Crystallography]]"
---

# Goals

1) We want to obtain an extremely pure piece of semiconductor (impurities $< {1}/{10^9}$) to be able to control doping and consequentially the electrical properties.
2) The crystals need to have a regular structure.
3) We want a monocristalline structure. 

![File:Cristaliz.PNG - Wikimedia Commons|300](https://upload.wikimedia.org/wikipedia/commons/c/c0/Cristaliz.PNG)
# Production of silicon monocrystals

1) We start the process with $S_{i}O_{2}$ or silica sand which contain a large number of impurities.
2) The sand is **refined** in a furnace @ 2000$^\circ$C for ~ 8 days. This process produces 98% pure silicon which can be used in metallurgy (Metallurgic Grade Silicon MGS).
3) To improve the purity, MGS is crushed and reacted with $HCl$ to obtain **TCS** (*trichlorosilane*) which is liquid at room temperature. This is done because it would be impossible to further purify solid MGS. 
4) TCS is treated with a process similar to the one used to refine oil called **fractional distillation** which is the separation of a mixture into its component parts, or fractions. Through this process we obtain purified TCS.
5) Silicon can be extracted from the TCS via the **Siemens** process that consists in creating a TCS and $H_2$ vapor which is introduced in a chamber where the $Si$ can deposit. After this steps we have reached the **required purity** level. ![[Pasted image 20231003174732.png|300]]
6) Now that we have a hyper pure $Si$  we can transform it into a monoscrystal using the **Czochralski process** (CZ). The process consists in heating the $Si$ slightly above its melting temperature (1415$^\circ$C) inside a quartz crucible. Once the $Si$ is molten, a small monocrystalline $Si$ seed is put in contact with the melt, rotated and slowly pulled up. During this process part of the liquid solidifies and sticks to the seed, allowing it to grow with a diameter inversely proportional to the pulling speed. The rotation inhibits the natural tendency of the crystal to grow along certain orientations and to produce a faceted crystal. The orientation of the seed determines the orientation of the crystal to be produced. The process can take up to 3 days and in the end an **ingot** is produced. ^649cfb
	1) The process can also be done with doped silicon. Adding a dopant introduces a new challenge because the concentration of dopant in crystal is not the same as that in the melt. We can define a **segregation coefficient** $k = C_s/C_l$ where $C_s$ and $C_l$ are the concentrations. $k$ is generally $< 1$, this means that the dopant tends to remain in the melt and thus its concentration increases during the process. Since this cannot be avoided the ingot produced will have **different properties** depending on where it is cut.

# Production of III-V monocrystals

The Czochralski process has to be slightly modified (Liquid Encapsulated CZ) for growing $GaAs$ crystals since $Ga$ and $As$ have different vapor pressures ($As$ would evaporate faster than $Ga$). The solution is to pressurize the chamber and work in an $As$ rich atmosphere. $GaAs$ is than placed under a layer of molten $B_2O_3$ which acts as a seal to suppress evaporation.

![[CZ for GaAs.png|300]]

# Wafer production

![[ingot parts.png|300]]

After the production of the ingot, a series of steps has to be followed to produce a usable wafer. The first thing to do is to **crop** the extremities of the ingot which contain defects and have a variable diameter.

## Inspection

After that the ingot needs to be inspected to check that it is **not undersized** (an oversize ingot can be compensated for later), then the **crystallographic orientation** has to be checked through XRD (X-Ray Diffraction) and finally we have to measure the **resistivities** of the upper and lower faces to ensure that they are within spec (this step is necessary due to the variable concentration of dopant seen above).
These three tests result in the rejection of ~50% of the ingots.

## Shaping

If the ingot passed all the tests it can be shaped to refine the outer diameter and remove the waviness created during the pulling process.

## Flat(s) grinding

One or two flat zones on the edge of the ingot are ground to get a crystallographic orientation reference. This reference will be used to orient the wafer during the processing.

![[flat grinding.png|300]]

## Ingot sawing

After all these steps the ingot is ready to be cut into wafers. The thickness of the slices can vary between 300 $\mu$m and 1mm. The thinner the slices, the more material is reduced to powder and up to 50% of the ingot can be wasted this way. The dominant state of the art slicing technology is Multi-Wire Sawing (MWS). Here, a thin wire is arranged over cylindrical spools so that hundreds of parallel wire segments simultaneously travel through the ingot.

## Edge grinding

After sawing the edges remain rough and have to be ground smooth to prevent crack and improve cleaning results.

![[edge grinding.png|200]]

## Lapping 

The sawing process produced wafers that can have slight thickness and shape variation and this problem can be solved by grinding the wafers to make them flat.

![[wafer defects.png|300]]

## Polishing

After lapping the wafers are mechanically flat but not optically flat (shiny). A mirror finish is required because it will allow to achieve better results in lithography and this can be obtained via a chemico-mechanical based [[Complementary Technologies#Global planarization|polishing]]. Wafers can be Single Sided Polished (SSP) or Double Sided Polished (DSP).

## Cleaning and marking

After the steps above the wafers can be cleaned with ultra pure deionized water to remove traces of the manufacturing process. In the end they are laser marked for identification purposes.

