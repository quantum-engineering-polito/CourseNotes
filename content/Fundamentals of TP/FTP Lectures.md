---
dg-publish: true
tags:
  - lattice
  - Bravais
  - lattice_parameter
  - reciprocal_lattice
  - PAC
  - excimer
  - 2bmin
  - Deal-Grove
  - buried_layer
---

![[Disclaimer#Welcome!]]

# Wafer production

## Goals

1) We want to obtain an extremely pure piece of semiconductor (impurities $< {1}/{10^9}$) to be able to control doping and consequentially the electrical properties.
2) The crystals need to have a regular structure.
3) We want a monocristalline structure. 

![File:Cristaliz.PNG - Wikimedia Commons|300](https://upload.wikimedia.org/wikipedia/commons/c/c0/Cristaliz.PNG)
## Production of silicon monocrystals

1) We start the process with $S_{i}O_{2}$ or silica sand which contain a large number of impurities.
2) The sand is **refined** in a furnace @ 2000$^\circ$C for ~ 8 days. This process produces 98% pure silicon which can be used in metallurgy (Metallurgic Grade Silicon MGS).
3) To improve the purity, MGS is crushed and reacted with $HCl$ to obtain **TCS** (*trichlorosilane*) which is liquid at room temperature. This is done because it would be impossible to further purify solid MGS. 
4) TCS is treated with a process similar to the one used to refine oil called **fractional distillation** which is the separation of a mixture into its component parts, or fractions. Through this process we obtain purified TCS.
5) Silicon can be extracted from the TCS via the **Siemens** process that consists in creating a TCS and $H_2$ vapor which is introduced in a chamber where the $Si$ can deposit. After this steps we have reached the **required purity** level. ![[Pasted image 20231003174732.png|300]]
6) Now that we have a hyper pure $Si$  we can transform it into a monoscrystal using the **Czochralski process** (CZ). The process consists in heating the $Si$ slightly above its melting temperature (1415$^\circ$C) inside a quartz crucible. Once the $Si$ is molten a small monocrystalline $Si$ seed is put in contact with the melt, rotated and slowly pulled up. During this process part of the liquid solidifies and sticks to the seed, allowing it to grow with a diameter inversely proportional to the pulling speed. The rotation inhibits the natural tendency of the crystal to grow along certain orientations to produce a faceted crystal, while the orientation of the seed determines the orientation of the crystal to be produced. The process can take up to 3 days and in the end an ingot is produced. ^649cfb
	1) The process can also be done with doped silicon. Adding a dopant introduces a new challenge because the concentration of dopant in crystal is not the same as that in the melt. We can define a segregation coefficient $k = C_s/C_l$ where $C_s$ and $C_l$ are the concentrations. $k$ is generally $< 1$, this means that the dopant tends to remain in the melt and thus its concentration increases during the process. Since this cannot be avoided the ingot produced will have different properties depending on where it is cut.

## Production of III-V monocrystals

The Czochralski process has to be slightly modified for growing $GaAs$ crystals since $Ga$ and $As$ have different vapor pressures ($As$ would evaporate faster than $Ga$). The solution is to pressurize the chamber and work in an $As$ rich atmosphere.  $GaAs$ is than placed under a layer of molten $B_2O_3$ which acts as a seal to suppress evaporation.

![[CZ for GaAs.png|300]]

## Wafer production

After the production of the ingot, a series of steps has to be followed to produce a usable wafer. The first thing to do is to **crop** the extremities of the ingot which contain defects and have a variable diameter. 

### Inspection

After that the ingot needs to be inspected to check that it is **not undersized** (an oversize ingot can be compensated for later), than the **crystallographic orientation** has to be checked through XRD (X-Ray Diffraction) and finally we have to measure the **resistivities** of the upper and lower faces to ensure that they are within spec (this step is necessary due to the variable concentration of dopant seen above).
These three tests result in the rejection of ~50% of the ingots.

### Shaping

If the ingot passed all the tests it can be shaped to refine the outer diameter and remove the waviness created during the pulling process.

### Flat(s) grinding

One or two flat zones on the edge of the ingot are ground to get a crystallographic orientation reference. This reference will be used during the wafer process.

![[flat grinding.png|300]]

### Ingot sawing

After all these steps the ingot is ready to be cut into wafers. The thickness of the slices can vary between 300 $\mu$m and 1mm. The thinner the slices, the more material is reduced to powder and up to 50% of the ingot can be wasted this way. The dominant state of the art slicing technology is Multi-Wire Sawing (MWS). Here, a thin wire is arranged over cylindrical spools so that hundreds of parallel wire segments simultaneously travel through the ingot.

### Edge grinding

After sawing the edges remain rough and have to be ground smooth to prevent crack and improve cleaning results.

![[edge grinding.png|200]]

### Lapping 

The sawing process produced wafers that can have slight thickness and shape variation and this problem can be solved by grinding the wafers to make them flat.

### Polishing

After lapping the wafers are mechanically flat but not shiny (optically flat). A mirror finish is required because it will allow to achieve better results in lithograpy and can be achieved via a chemico-mechanical based polishing. Wafers can be Single Sided Polished (SSP) or Double Sided Polished (DSP).

### Cleaning and marking

After the steps above the wafers can be cleaned with ultra pure deionized water to remove traces of the manufacturing process. In the end they are laser marked for identification purposes.

# Crystallography

Before analyzing in more detail the crystals it is useful to have a general overview of the 3 different types of solids we can have.

## Types of solids

| Monocrystal          | Polycristal          | Amorphous          |
| -------------------- | -------------------- | ------------------ |
| ![[monocrystal.png]] | ![[polycristal.png]] | ![[amorphous.png]] |

In a monocrystal all the atoms are arranged on a common **lattice** structure, in a polycrystal there are multiple lattices of the same type oriented differently to one another (each lattice is called **grain**). In amorphous material instead the atoms are placed randomly in space.

While we will analyze mostly monocrystals, it is important to note that all three types are useful in practical applications, such as the creation of integrated devices.

## Crystal structure

### Bravais lattice

There are only 14 unique lattices possible in 3 dimensions called **Bravais lattice**. We are mostly interested in studying the **cubic** lattice which comes in three forms: ^56093c

| Simple Cubic  | Body Centered Cubic (BCC)                    | Face Centered Cubic (FCC)                          |
| ------------- | -------------------------------------------- | -------------------------------------------------- |
| ![[cube.png]] | ![[bodycenteredcubic.png]]                   | ![[faceCentereCubic.png]]                          |
|               | the blue atom is in the center of the cube | the blue atoms are on the faces of the main cube |

^329279

Each lattice can has a specific **lattice parameter** $a_{0}$ which represents the length of the cube side. ^962ccb


### Silicon lattice

Crystalline structure of $Si$ belongs to the family of cubic crystals and is the result of the interpenetration of two FCC where one sub-lattice is moved away from the other along the diagonal of the cube of an amount corresponding to $\frac{1}{4}$ of its length. Every atom is surrounded by 4 atoms placed at the same distance at the corners of a tetrahedron.

<div class="sketchfab-embed-wrapper"> <iframe title="Diamond Lattice Structure" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/b0378af5ed874c8780b11c3a76d07ace/embed?dnt=1"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/diamond-lattice-structure-b0378af5ed874c8780b11c3a76d07ace?utm_medium=embed&utm_campaign=share-popup&utm_content=b0378af5ed874c8780b11c3a76d07ace" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Diamond Lattice Structure </a> by <a href="https://sketchfab.com/emanuelemessina?utm_medium=embed&utm_campaign=share-popup&utm_content=b0378af5ed874c8780b11c3a76d07ace" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Emanuele Messina </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=b0378af5ed874c8780b11c3a76d07ace" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>

### Miller indices

From what we will see later, the same material, with the same lattice structure can behave very differently depending on how it is cut (for thin film like wafers we are interested in the surface properties). 
To be able to describe different surfaces we can use Miller indices to identify the cut plane. 
The method to find those indices is as follows:

1) Find the points where the cutting plane intercepts the $x,y,z$ axes, in this case $(2, -3, 4)$ 
2) Write the reciprocal of the numbers $(1/2, -1/3, 1/4)$
3) Reduce the list to the smallest integer $(6/12, -4/12, 3/12) \implies (6, -4, 3)$
4) Usually negative numbers are represented with a bar, the Miller index of this plane is $(6\bar{4}3)$.

![[millerIndeces.png|200]]

### Surface behavior

The way the the crystal is cut influences in a very significant way the properties of the material. The cut can in fact change the number of dangling bonds on the surface, thus changing how reactive the surface can be (more dangling bonds speed up the oxidation for example). 
In the following table it is possible to see how different cuts change the surface properties of the same material.

| 111             | 110             | 100             |
| --------------- | --------------- | --------------- |
| ![[fcc111.png]] | ![[fcc110.png]] | ![[fcc100.png]] |

## Crystalline defects

### Point defects

| Type                    | Explanation                                             | Image                     |
| ----------------------- | ------------------------------------------------------- | ------------------------- |
| Self interstitial       | There is an extra atom of the right element             | ![[selfInterstitial.png]] |
| Interstitial            | There is an extra atom of the wrong element             | ![[interstitial.png]]     |
| Vacancy                 | An atom is missing                                      | ![[vacancy.png]]          |
| Substitutional impurity | There is a wrong atom in the right place of the lattice | ![[substitution.png]]     |

### Line defects

The main line defect we will consider is **edge dislocation** which consists in the insertion of an extra half plane of atoms in the lattice. This half plane generates **compression and tension stresses**.
![[edgeDislocation.png|300]]

It is important to notice that dislocations can move across the material due to thermal or mechanical stresses.

### Surface defects

The main surface defect we will consider are **grain boundaries** which are the interfaces between crystals with different orientations. The atoms on these boundaries tends to be loosely bound and thus more reactive.
Lower temperature during the deposition process tend to create smaller grains and thus many boundaries, higher temperatures instead produce larger grains and less boundaries.

![[grainBoundary.png|200]]

### Volume defects

Impurities have an intrinsic solid solubility in the host crystal which varies with temperature; usually solid solubility decreases with decreasing temperature, so if impurities are introduced at maximum concentration for a certain T, when T is lowered some impurities (the excess respect to the solid solubility at that temperature) can precipitate and form local conglomerates. The volume of the crystal in that region can drastically change and this causes **volume dislocations**.

![[volumeDislocation.png|200]]

# Clean room technology

Clean rooms are environments where particulate concentration is reduced and kept under a specified level (usually also temperature and humidity are controlled).
Clean rooms are fundamental to prevent contamination which can create the following problems: it can **ruin devices**, leading to a lower yield and thus an increase of the manufacturing costs; it can **poison equipment** which has to be repaired, incrementing costs and slowing down production; lastly it can pose a **health risk** for the employees and other people involved in the manufacturing.

## Sources of contamination

Before finding a way to prevent contamination, it is important to know what are its main sources. Analysis show that the **human body** is the main source of airborne particles and that their number varies depending on the activity performed by the person. For this reason, depending on the class of the clean room, multiple layers of *clothing* have to be used to minimize contamination.

Other sources are the **machines** which can wear and produce debris during normal operations, to mitigate this problem in fact, they are often installed through the walls, in order to separate the clean side from the "dirty" side. Finally also the **materials** and the **processes** used can create particles that need to be eliminated, for this reason it may be necessary to use high purity gasses (for example *Oxygen 4.0* where the *4* indicates the number of "9s" of purity, in this case 99.99%).

## Contamination induced problems

The presence of contaminants in the air can easily damage a product in multiple ways:

- **Change electric fields**: if a material (for example a silicon wafer) comes in contact with a source of ions (for example the skin), its electrical properties can be drastically changed, to the point where it can no longer serve its purpose.
- **Unintentional films between layers**: contaminants can create nanometric films on the surfaces of a material which can prevent adhesion between two film or create unwanted open/short circuits.
- **Shadowing**: dust particles can create defects in photolitograpy processes by casting an unwanted shadow on the resists which, in turn, can ruin the final product.
- **Jamming**: dust particles can prevent the movement of micro electro-mechanical systems (MEMS).

## Clean room classification

The first standard for the classification of clean rooms was invented in the '60 and required a room to respect specific limits in particles number and sizes, according to the plot below.

![[fed std 209.png|300]]

A class 100 for example have less than 100 particles greater than 0.5 $\mu$m per cubic foot). 
Particulate concentration can be directly measured
with methods of filtering and counting (usually too
slow) or with a suitable apparatus exploiting optical
scattering of a laser beam (just like looking at
particulate through a sun beam) where the number of scattering lines represents the number of particles and the angle is proportional to their size.

Nowadays the accepted standard, which has been updated by ISO, is stricter and more detailed.

## Designs

There are two main kinds of clean room designs: the first one is more expensive but offers better performances and consists in a room with a raised perforated floor through which air can pass, the second design is similar but instead of having the raised floor it has holes at the bottom of the walls, this design is cheaper but also less effective since it doesn't allow a laminar air flow (which minimizes the time spent in the room by a particle). 

![[clean room.png|500]]

### Laminar flow

Since laminar flow is so important for the performances of a clean room, the equipment  is build to minimize turbulence (special tables, through wall machinery, etc).

### Filters

Usually three kinds of filters are used to clean the air: the first step is using a HEPA filter (used also in cooker hood) this filters can retain 99.97% of particles with a diameter of 0.3$\mu$m (when talking about filter it if fundamental to state both the **filtering capability** and the **particle size** it refers to); the second step is a medium filter; the last step is an absolute filter which does most of the work. Filter wear can be estimated by measuring the pressure difference between the two sides (the fuller the filter, the higher the pressure difference).

## Deionized water

Since water is used extensively in washing steps, it is important that it doesn't contain particulates or contaminants; before being used it has to pass through a series of filters (ion-exchange resins and active carbons) to remove salts and organic materials. 
The purity can be evaluated by measuring its electric resistance (good values are 10-18 M$\Omega \cdot$cm).

# Lithography

Lithography is a process used to **select** parts of the surface of a material that will need to be processed later with different technologies. One of the advantages is that it allows **batch processing**, i.e. the creation multiple similar features in parallel; this can drastically decrease processing times and thus decrease costs.

![[photolitography.png|400]]

The process consists in covering the substrate with a photosensitive resists and partially covering it with a mask. After that the areas of the resists which are exposed to light will be modified and portions of the substrate will be exposed, allowing further processes to affect only specific parts of the substrate.

## Resists

### Composition

Photoresists are photosensitive organic mixtures which contain three main components:

1) **Inactive polymer resins** (a binder that provides mechanical/chemical properties adhesion, chemical resistance, rigidity, thermal stability, etc).
2) **PhotoActive Compounds (PAC)** which is what reacts to the energy source.
3) A **solvent** which controls the viscosity of the base, keeping it in liquid state for spinning and thus affects thickness.

Resists also contain other elements that can be needed to improve specific properties, such as surfactants to allow them to stick to the wafer, dyes to absorb specific wavelengths, etc.

### Properties

#### Polarity

Polarity is the property that defines which part of the resists will become more soluble and which less soluble after exposure.

In a **positive** resist light breaks the polymer chains making them more soluble, this will replicate the same pattern of the mask on the resist.
In a **negative** resist, on the other hand, light makes the polymer chains less soluble by inducing cross-linking, a negative resist will remain on the wafer in the places where there were holes in the mask.

There is also a third kind of photo resist called **image reversal**, which will be described in a [[#Image reversal|following section]].

>[!tip] Positive vs Negative
> - **Positive**: light creates holes
> - **Negative**: shadow creates holes

#### Resolution

Resolution capability is the smallest opening or space that can be produced in a photoresist layer and is related not only to the resist itself but also to the processes. Usually a thinner layer will have a better resolution while a thicker one will be stronger to mechanical or chemical stresses. Positive resist has a better resolution due to the smaller size of polymer.

#### Sensitivity

Sensitivity is the minimum energy density required to get the full transformation of the resist: **the more sensitive, the less energy is required**.

![[development curve.png|500]]

#### Contrast

Contrast is defined as the maximum slope of the development rate curve; it depends on the resist but also on the process, wavelength of exposure, etc.

High contrast ratio means "vertical" walls which most of the time means good quality. For cost or practical reasons sometimes lower contrast might be preferred.

## Mask generation

Masks are fabricated with a lithographic technique which is highly accurate but extremely slow (and thus wouldn't be possible to use it for manufacturing). A transparent substrate (quartz or soda lime glass) is covered with a $Cr$ layer which will create the mask itself; the resist can be exposed with a laser (cheap) or with an electron beam (accurate) to create the pattern. After the exposure is complete the exposed $Cr$ is etched.

In addition to the real design, it is important to add **alignment marks** to the mask to allow precise positioning during manufacturing (where multiple masks have to be used to build a single part). These marks are typically crosses placed in the same spots which will later be overlapped to guarantee a correct placement.

## Priming

Before starting the preparation of the wafer, it need to be dehydrated in a convection oven to remove water that it absorbed while stocked. After that a primer can be applied to improve adhesion of the resist in the next step.

## Resist coating

Since most of the resists are liquid they can be applied by placing a small quantity on the wafer and spinning it to distribute the resist on the surface.
The spinning speed has to be controlled in order to achieve the desired resist thickness. Usually the wafer is spun slowly at first to spread the resist and than the speed is increased to refine the surface and the thickness. 
![[spin speed.png|300]]

Do to surface tension there may be an accumulation of resist on the edges (called **edgebead**) which can decrease the usable surface area of the wafer.

## Resist soft bake

At this stage the resist is still liquid and thus cannot be handled. To solve this issue wafer is heated to let the solvent evaporate. The temperature and baking time have to be controlled accurately to prevent damage to the resist (which may crack if heated too rapidly) and to obtain the proper result.

## Resist exposure

Exposure is the process of providing energy to the resist in the spots selected by the mask. The energy source can be a lamp, a laser or an electron beam. It is important to note that the lower the wavelength of the light source, the better will be the results: light passing through an aperture of width similar to its wavelength will form a diffraction pattern.

![[diffraction.excalidraw.png|400]]

### Exposure sources
#### Mercury vapor lamp

The most common source is the mercury ($Hg$) vapor lamp.
In the image below it is possible to see that the spectrum of the $Hg$ lamp is not uniform and that some wavelengths have higher energy compared to the other; this has to be take into consideration when exposing the resist. One alternative is to expose with the full wavelength to obtain the maximum energy and thus the minimum exposure time, the other one is to filter the light and expose with a specific wavelength to have more control over the process.

Nowadays there are also LED lamps that mimic the effects of $Hg$ lamps without requiring filters to select specific peaks.

![[hg vapor.png|400]]

#### Deep Ultra Violet (DUV) laser

Since a lower wavelength means higher precision, there are more expensive alternatives to the $Hg$ lamp that provide high intensity, low wavelength light (below 250nm). One of the technologies that allow to achieve this results is the **excimer pulsed laser**.

In this type of laser, a gas made of two (for example Kripton and Fluorine) is exposed to high intensity energy to make the two elements react and "bind" together. When the excitation energy is removed, the excimer dissociates and releases the energy at the characteristic wavelength. A pulsed excitation is used to repeat the process.

#### Extreme Ultra Violet (EUV) lasers

An even more advanced kind of lasers allows to reach wavelengths of around 13nm but is extremely expensive. The laser beam is produced by hitting a droplet of molten tin twice with a laser; the second time the droplet is hit it creates plasma that emits the desired wavelength.

Since EUV is absorbed by everything, this technology has to operate in vacuum and has to use reflective optics and reflective masks.

#### Electron beam

This technology uses a focused beam of electrons instead of light to expose a radiation-sensitive resists. In this way it is simple to obtain nm-scale features without the use of a mask (**direct writing**). Despite being accurate, this process is extremely slow since the features on the wafer are not exposed simultaneously.

One common type of resists used with electron beam lithography is **PMMA**.

### Exposure techniques

There are different ways to expose the resist, each with pros and cons, here we will see the most common. It is important to keep in mind that the resolution can vary a lot depending on the exposure tool. The number that "defines" the resolution is the **min line/gap period** ($2\cdot \text{b}_{\text{min}}$) defined as follows:

$$
2\cdot \text{b}_{\text{min}} = 3 \sqrt{ \lambda \cdot\left( s + \frac{z}{2} \right) }
$$
where $s$ is the distance between the mask and the resist, $z$ is the thickness of the resist and $\lambda$ the wavelength of the light source. It is important to notice that lower wavelengths and lower mask-resist distances provide better results.

#### Contact

In contact printing the mask is applied directly to the resist; this method has the advantage of being **easy** to perform, **cheap** and fast. At the same time though, since the mask and the wafer come into contact, they can **wear** and get contaminated.

Another disadvantage is that the mask needs to have the same size of the wafer (large and expensive) since there is no magnification.

Contact printing is capable of high resolution but has unacceptable defects densities.

#### Proximity

This setup is similar to the previous one but in this case the mask is slightly separated from the resist, this reduces the resolution and increases costs and complexity but, on the other hand, there is **no wear** or contamination.

#### Projection

In projection exposure the mask is positioned very far from the wafer (~ 1m) and a set of lenses is used to minimize diffraction by performing a inverse Fourier transform. This method is extremely expensive and complex but have the following advantages over the previous ones:

- No mask wear
- Can introduce a demagnification factor (around 4x) which means that the mask can be cheaper.
- Higher resolution because only a small part of the mask is imaged

Because of the demagnification it is **not possible to expose the whole wafer** all at once though. There are two possible solutions to this problem.

- **Projection stepper**: in this method the wafer is translated each time a new die (a portion of the image, usually one chip) has to be exposed. Thanks to the use of precision stepper motors, the alignment of the mask needs to be done only once. For every new exposure it is important to set the correct focal plane to take into account wafer defects.
- **Projection scanner**: in this method both the wafer and the mask move (in opposite directions) to expose a single die. The die is not exposed all at once but is scanned, exposing only a small area at a time. This makes it possible to fabricate lenses that can be both smaller and less precise (since only a small part of the lens is used).

### Alignment and exposure tools

There are cases where it is necessary to align features on opposite side of the wafer. There are two main ways to perform this based on the properties of the sample: if the sample is transparent to some wavelengths (usually **infrared**), the samples can be aligned "normally" since it is possible to see the alignment marks through the sample itself.

On the other hand, if the sample is not transparent, a more complex method is required. In this method the mask is inspected from underneath with a microscope to identify the alignment marks and their position is stored. Afterwards the wafer is introduced in the machine and aligned according to the stored marks.

![[non trasparent alignment.png|400]]

## Reflections and standing waves

When exposing the photoresist, the light can be reflected by the surface of the wafer and interference patterns can form between the incident and reflected beams. This causes an intensity variation across the thickness of the resist, causing inconsistent exposure and thus inconsistent features.

![[standing waves.png|300]]

![[standing waves defects.png|300]]

One possible solution for this issue is to coat the wafer with an anti reflecting coating before spinning the photoresist. This coating can reduce the issues but introduces more steps. Another solution to mitigate this issue is described in the next section.

## Resist post exposure bake

The resist post bake is an optional step that can help mitigate the effects of the standing waves seen previously. The bake facilitates the diffusion of the exposed and unexposed resist and thus smooths the waves.

The image below shows the effect of the post exposure bake.

![[post bake.png|500]]

It is important to notice that overbaking can reduce the contrast ratio.

## Resist image developing

The development dissolves the exposed/unexposed parts of the resist (depending on the type) and reveals the pattern. 

There are two method to develop the wafer: **immersion** development consists in placing the wafer in a developer bath, in **spray-on** development, on the other hand, the developer is sprayed uniformly on the resist. In both methods the timing is critical: exposing for too long can worsen the results by removing unwanted resist, underexposing can cause even higher damage by preventing access to the substrate.

![[development defects.png|200]]

## Resist hard bake

Hard baking is another optional step that can be performed to evaporate all solvents in the photoresist. This could be needed for wet etching or to make the resists **harder** and give it better implantation resistance, to improve the **adhesion** with the surface, or to **reduce pinholes**. Similarly to the [[#Resist post exposure bake|post exposure bake]], over baking the wafer can lead to decreased resolution.

## Etching vs Lift-off

Both etching and lift-off are processes used to form a pattern with a thin film (metal, oxide, etc.) over a wafer.

### Etching

In etching, the film is first applied to the whole wafer, the required regions are selected with photo lithography and finally the exposed regions are etched to reveal the pattern.

![[etching.png|400]]

### Lift-off

In lift-off the, on the other hand, re regions where the film has to be deposited are selected with lithography, the film is applied everywhere and finally the resist is dissolved to remove the unwanted sections of the metal film.

![[liftoff.png|400]]

#### Benefits

The main benefit of lift-off is the fact that it doesn't require an etchant for the metal. This becomes more relevant when the features that have to be formed are made of different metals; each of them would probably require a different etchant.

![[multilpe etchants.excalidraw.png|400]]

#### Problems

The main problem with lift-off is due to the fact that the contrast of the resist is not infinite and thus the metal film applied over it will form a continuous layer which can lead to peeling off unwanted regions.

![[liftoff problems.excalidraw.png|500]]

### Image reversal

To solve the problem seen above, it is possible to use a special kind of photo resists called image reversal. The resists starts as a positive resist and is exposed using an inverted mask (the exposed areas are the ones that will remain). After being exposed, the resist is baked to make the exposed regions inert and the unexposed regions photosensitive. After this step a **flood exposure** is performed to make the non-inert regions soluble. After development, the parts of the resists that where originally exposed remain, but the slopes are negative to prevent the problems seen above with the lift-off.

![[image_reversal_overview_1.gif|500]]

## Models and simulation

Lithography simulations rely on both optics and chemistry, the first one to simulate the aerial image, the second to simulate the formation of the latent image in the resist.

The simulations provide a powerful tool to see in advance the effects of a change in the process (for example different wavelength, smaller feature size, etc.); the images below show how reducing the wavelength improves the results.

![[lithography simulation1.png|400]]

This other example shows how the post exposure bake reduces the effects of standing waves.

![[lithography simulation2.png|400]]

# Silicon oxidation

Silicon oxidation is an additive process that consist in the formation of silicon dioxide ($SiO_{2}$) on the exposed surface of a wafer. This oxide is one of the main reasons why silicon became the most used semiconductor in the industry; $SiO_{2}$ is an excellent dielectric material, it is easy to grow and can be used for many different applications (insulator, masking layer, sacrificial layer in micro-machining, etc.).

>[!warning] Silicon oxidation is not a deposition

There are three main "ingredients" needed for the oxidation:

1) High temperature
2) Exposed $Si$ surface
3) Oxidant atmosphere

This process can grow highly pure $SiO_{2}$ layers up to 2$\mu$m thick; there are other techniques that can create thicker, but less pure layers.

In this course we will only focus on the **amorphous** $SiO_{2}$.

## Oxidation

The oxidation is obtained by heating the silicon wafers in an atmosphere containing an oxidant which can be $O_{2}$ or water steam. The kind of oxidant defines the type of oxidation:

| **Dry oxidation**        | **Wet oxidation**                    |
| ------------------------ | ------------------------------------ |
| $Si + O_{2} \to SiO_{2}$ | $Si + 2 H_{2}O \to SiO_{2} + 2H_{2}$ |
| Slow                     | Fast                                 |
| High purity oxide        | Less pure oxide (there might be $H_{2}$ impurities)                                     |

During the oxidation process the $Si$ is **consumed** and converted into $SiO_{2}$, since the oxide has a density which is $\approx 1/2$ the density of the $Si$, the oxide layers grows thicker and thicker.

![[SiO2.png|300]]

It is extremely important to remember that

>[!warning] Oxidation occurs at the interface, not on top of the oxide

This is because the oxidant molecules have to diffuse through the already formed oxide, reach the pure silicon and oxidize it; on the surface of the $SiO_{2}$ there is no $Si$ to oxidize. For this reason the growth rate will become slower and slower with time.

As stated [[#Surface behavior|before]], the surface orientation of the $Si$ substrate will affect the oxidation time: 111 silicon will oxidize 1.7 times faster compared to 100.

## Modelling thermal oxidation of silicon

> [!error] I'm not too sure about this part, there might be even more mistakes

This paragraph will provide a model to get a simplified tool to predict and calculate:

1) The oxidation rate: $\frac{\partial x_{ox}(t)}{\partial t}$  
2) The final oxide thickness at a given time $t$: $x_{ox}(t)$

The model, proposed by Deal and Grove, takes into consideration three fluxes F1, F2 and F3

- F1 represents the flow of oxidant gas that diffuses to the surface of the growing film.
- F2 is the flow of the particles that diffuse through the growing film.
- F3  represents the oxidant molecules that react with the $Si$.

The model makes the simplification that F1 = F2 = F3 = J (**steady state**). This means that the model is not accurate for the initial stages of the process and thus cannot be used for very thin layers.

The Deal-Grove model is based on the Fick's first law of diffusion (which is valid in general for diffusion phenomenon).

$$
\begin{align}
J = F_{2} &= -D \cdot \frac{dN}{dx}  \\
&= D \cdot \left( N_{0} - \frac{N_{i}}{x_{0}} \right) \left[ \frac{\text{number of particles}}{cm^{2} \cdot sec} \right]
\end{align}
$$

Where $N_{0}$ is the concentration of oxidant species (particles per $cm^{3}$). $N_{0}$ is $5.2 \times 10^{16}$ for dry oxidation and $3\times 10^{19}$ for wet oxidation.

Combining the equation above with 

$$
J = F_{3} = k_{s} \cdot N_{i}
$$

and 

$$
J = F_{2} = F_{3} \quad \text{steady state condition}
$$

we get 

$$
J = \frac{D \cdot N_{0}}{(x_{0} + D/k_{s})}
$$

$k_{s}$ is the **surface reaction speed for oxidation** and is a parameter that "contains" all the characteristics of the materials and the temperature (similarly to the spring constant that takes into consideration the spring diameter, its material, etc.).

### Oxidation graphs

### Multiple oxidations

<img src="https://i.imgur.com/BTqYo1I.gif">

### Growth rate regimes

## Rapid thermal oxidation

Rapid thermal oxidation is a technique used to form thin, high quality oxide layers in a very short time (in the order of a couple of minutes compare to several hours).

This process exploits UV lights to split $O_{2}$ into oxygen radicals $O^{\bullet}$, which are neutral (non ionized) but extremely reactive.

# Epitaxy

Epitaxy is a technique that consists in growing monocrystalline layers on top of a monocrystalline substrate. Similarly to the [[#^649cfb|Czochralski process]], a seed is needed for the new crystal to grow properly but in this case the grown material does not have to be the same as the substrate. With **heteroepitaxy** it is possible to grow different crystals on top of a pure silicon substrate provided that they have a similar crystalline structure and lattice parameter.

Epitaxy can be used for multiple reasons such as adding a layer with different doping on top of a doped substrate (for example to increase breakdown voltage), or create **buried layers**. Buried layers are regions of the substrate which are doped and the covered with a new layer of silicon; this can be useful since it is not possible to add dopants too deeply. It is also possible to control the doping profile (the concentration of dopants at different depths) as visible in the plots.

![[doping profile.excalidraw.png]]

Epitaxial layers are also **smoother** than the substrate (which can be needed to deposit a smooth layer on a rough substrate) and **less contaminated**.

## Growth regimes

The image shows the boundary between monocrystalline and polycrystalline growth; with exactly the same conditions, just by changing the temperature, the results can vary a lot. We can see that monocrystals require higher temperatures, this is because when the $Si$ atoms hit a cold surface they stick to it (**condensation**), if the surface is hot, on the other hand, they can diffuse and "fill holes", providing a more omogene result. 

The plot also shows that monocrystals require more time to be grown at a given temperature.

![[growth regimes.png|400]]

## Epitaxial techniques

Epitaxial techniques can be divided according to the **mother phase** (the environment where we introduce the element for epitaxy).

### Vapour Phase Epitaxy (VPE)

VPE uses gaseous precursors which contain the gas to be deposited and a carrier gas. 

The wafers are introduced in a reaction chamber and they are induction heated by a graphite susceptor. This heating technique prevents the walls of the chamber from heating up and reacting with the gases.
Once the required temperature is reached, the precursor is introduced in the chamber where it is dissociated: one part is deposited on the substrates and the by-product is vented. 

An example reaction would be 

$$
SiCl_{4} + 2 H_{2} \iff Si + \underbrace{ 4HCl }_{ \text{vented} }
$$
It is important to notice that this formula would be the same for both mono and polycrystal deposition, what changes is the temperature.

### Liquid Phase Epitaxy (LPE)

LPE uses an oversaturated solution containing the material to be deposited. The solution is kept at high temperature to prevent precipitation, the substrate is then placed under it and the temperature is slowly decreased to favour precipitation of the solute on the wafer and allow the epitaxy.

#### Reactor

The LPE reactor consists in a crucible hosts one or more wells which contain the mother phase. To start the process a substrate is slid under the well and the temperature is lowered. To stop the process, on the other hand, the substrate is removed from under the well.

![[MPE reactor.png|400]]

To avoid oxidation of the solution and the substrate, the process happens under a flux of purified $H_{2}$.

### Molecular Beam Epitaxy (MBE)

In MBE the mother phase is in **molecular flux conditions** (a gas at very low pressure where the molecules never collide with each other).

The reaction takes place in a **ultra high vacuum** (UHV) chamber that contains the wafer and multiple furnaces (**Knudsen cells**) that host the material to be deposited in solid form (?). The wafer is held by a rotating support that allows for a more uniform deposition.

The reaction is started and stopped by opening and closing **shutters** that cover the furnaces; this guarantee a fine control over the process.

The furnaces are separated by $N_{2}$ cooled walls that keep them thermally isolated from each other.

Since UHV require a lot of time to be achieved, the main chamber is preceded by a smaller chamber used for loading the substrates without breaking the vacuum in the main chamber.

# Chemical Vapour Deposition (CVD)

CVD allows thin film formation from vapor phase reactants. The material that can be deposited range from metals to semiconductors to insulators.

![[cvd vs epitaxy.png|300]]

All CVD techniques involve an energy source (usually temperature) that is used to break the precursors.

## Acceptance angle and conformality

The number of molecules incident on the surface is a function of the **acceptance angle**. Since the number of molecules directly affects the **growth rate**, it is common to obtain uneven surfaces. The more even the thickness of the film, the more **conformal** the result is.

![[acceptance angle.png|400]]

Even though a fully conformal deposition represents the ideal case, there are situations where conformality is not wanted. 

High aspect ration shapes (for example thin and deep holes) can generate voids during the CVD process if the conformality is not sufficient.

![[conformality.png|600]]

## Atmospheric Pressure CVD (APCVD)

In APCVD wafers are placed on a conveyor belt that runs in an open chamber (there are no physical barriers, the separation with the outside is created by Nitrogen or Argon "curtains").  The atmosphere in the chamber is heated to favour the deposition of the materials in the gas.

Since the chamber is not enclosed, the process can go on continuously, increasing the **throughput**; the same fact, on the other hand, increases **contamination**.

## Low Pressure CVD (LPCVD)

LPCVD is similar to APCVD but in this case the reaction happens in a sealed environment, increasing uniformity and purity. Because of the low pressure of the gas, the concentration of molecules to be deposited is lower and thus the deposition rate decreases compare to APCVD.

## Plasma Enhanced CVD (PECVD)

### Plasma generation (DC voltage)

Plasma is generated by applying a voltage to cathode and anode and placing a gas of neutral particles between them. The voltage accelerates the free electrons which collide with the atoms of the gas, **ionizing** them. This produces a cascading series of collisions which sustain the reaction.

Electrons can also **dissociate** the molecules generating **free radicals** which are extremely reactive. They can excitate the atoms in the gas making them jump to a higher energy level; when the excited atoms return to ground state they emit visible light

### Plasma generation (AC voltage)

The steps are the same as in the previous case but this time the AC voltage causes the electrons to oscillate and does not affect the ions (which are too massive).
It is also possible to introduce a **bias** voltage to accelerate the ions in one direction.

---

Plasma is used in CVD to deposit ions and free radicals on a substrate without having to heat it too much. This is offers more degrees of freedom for **near the end processing**: using high temperature could in fact damage or destroy previous steps.

![[near end processing.png|300]]

PECVD offers also the advantage of having a higher deposition rate compared to LPCVD but the plasma can damage or contaminate the wafer.

## CVD techniques comparison

| Type  | Advantage                      | Disadvantage                      | Temperature |
| ----- | ------------------------------ | --------------------------------- | ----------- |
| EPCVD | Simple, Fast                   | Contamination, Poor step coverage | 350-1200 C  |
| LPCVD | Clean, Conform, Uniform        | High temperature, Slow            | 550-600 C   |
| PECVD | Low temp, High deposition rate | Contamination                     | 300-400 C            |

## Atomic Layer Deposition (ALD)

Atomic Layer Deposition (ALD) is a modified CVD process to create an additional single atom layer on top of a substrate.
The process uses several gases that are introduced into the reaction chamber one after the other.

Each gas reacts in such a way that the current surface is saturated (**self-limiting reaction** at the surface with first gas), and therefore the reaction comes to a standstill. Between the reactions of these gases the chamber is purged with an inert gas, like nitrogen or argon. 

A specific example for an ALD process is the deposition of aluminum oxide, this can be realized with trimethylaluminum (**TMA**, $C_{3} H_{9} Al$) and water ($H_{2}O$):

1) First step is the elimination of hydrogen atoms which are bound to oxygen (simply because environment humidity) at the wafer surface. The methyl groups ($CH_{3}$) of TMA can react with the hydrogen to form methane ($CH_{4}$). The remaining molecules bond with the unsaturated oxygen. If these atoms are saturated, no more TMA molecules can react at the surface.
2) The chamber is purged and subsequent water steam is led into the chamber. Every hydrogen atom of the $H_{2}O$ molecules now can react with the previously deposited surface atoms to form methane, while the hydroxyl anion is bond to the aluminium atoms. Hence, there are new hydrogen atoms at the surface which can react in a afterwards step with TMA like in the beginning.

![[atomic layer depostion.png|400]]

ALD can achieve 100% conformality even in 3D structures and the thickness of the film can be precisely controlled by varying the number of cycles.

![[ALD example.png|400]]

# Silicon dioxide

?
%% add something %%

## Silicon dioxide methods comparison

> [!warning] This table is simplified compared to the one on the slides


| **Property**           | PECVD          | LPCVD                   | Thermal oxidation |
| ---------------------- | -------------- | ----------------------- | ----------------- |
| Deposition Temperature | 200$^{\circ}$C | 450-900$^{\circ}$C      | 1000$^{\circ}$C   |
| Composition            | $SiO_{2}(H)$   | $SiO_{2}(H/C/Cl)$       | $SiO_{2}$         |
| Film density/quality   | Low            | Medium                  | Good              |
| Step coverage          | Non-conformal  | Conformal/Non-conformal | Conformal         |

## Polycrystalline silicon (Poly)

Polycrystalline silicon can be obtained through LPCVD and is used as the gate electrode in MOS devices because it is more affordable than $Al$. It can be doped by implantation and diffusion.

The grain size depends on the deposition temperature: hotter deposition leads to larger grain structure (more similar to crystalline silicon), similarly to what happened in [[#Growth regimes|epitaxy]].

# Physical Vapor Deposition (PVD)

In physical vapour deposition a film is grown on the substrate by the **condensation** of a vapor. 

Compared to [[#Chemical Vapour Deposition (CVD)|CVD]], where there was a chemical bonding of the film to the substrate, in PVD there is only a physical bonding: the material "sticks" to the **cold surface**.

## Thermal evaporation

Thermal evaporation allows to deposit a limited amount of material (mostly metals). The process happens in a vacuum chamber where the material to be deposited is evaporated. The high vacuum allows to increase the **mean free path**, which is the distance travelled by the molecules of the gas before colliding with another molecule. A high mean free path is important because it allows the molecules to propagate in a straight line.

The vacuum chamber hosts the wafer (which is held upside down to reduce particulates) and a hot crucible that holds the material. The crucible is sealed by a shutter that can be controlled to achieve the right thickness.

Since the vapour travels mostly in straight line and the wafer is cold (no surface migration), the results are highly unconformal.

![[thermal evaporation conformality.png|400]]

### Crucible selection

Since the crucible is in direct contact with the material, it is important to select a crucible that will not react with it. Since the crucible is heated by Joule effect it has to be conductive; the most common choices are $W$, $Ta$, $Mo$ and $C$.

If it not possible to find a suitable material, there are crucibles made from non conductive refractive material (ceramics) that contain a metal wire that heats up.

### Advantages and disadvantages

Thermal evaporation has an high deposition rate but it is important to choose the right crucible for the job. Also, not every material can be evaporated: $W$ is nearly impossible, $Mo$ and $Pt$ are extremely difficult.

## E-beam evaporation

In e-beam evaporation a conductive filament is heated up to electron emission. The electron are then accelerated and deviated with a magnetic field to hit the material placed in a crucible (called **liner**). Since the liner is water cooled, there is no risk of contamination and the magnetic deviation separates the electrons from possible contaminants.

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

# Doping

Doping consists in introducing atoms in **substitutional sites** of a substrate to alter it **physical**, **electrical** and **chemical** properties. The doping levels can vary from $10^{15}$ to $10^{20}$ atoms/cm$^{3}$; adding more atoms would saturate the substrate (passing the solid solubility) and creating **volume defect**. 

The most used atoms to dope $Si$ are $P$, $As$ and $B$ since they have greater solubility in $Si$ compared to other dopants.

Doping silicon can change its conductivity by 8 orders of magnitude but also alter its resistance to etching and its mechanical properties.

## Methods

The two main methods for doping are **diffusion** and **implantation**.

Diffusion works by exposing the (properly masked) substrate to a gas of dopant atoms which will diffuse inside the material with a pattern similar to the one in the picture. Due to the nature of this process, it is impossible to precisely control the size and shape of the doped region and, for this reason, diffusion is not used in nanotechnologies.

![[diffusion doping.png|300]]

In implantation, on the other hand, the substrate is bombarded with dopant atoms which penetrate in the material. This allows for a better control of the amount of dopant and of the size of the doped region. The main disadvantage, which will be explained [[#Annealing|later]], is that the dopant atom, hitting the surface, damage the crystalline structure of the substrate, which has to be "healed".

![[implantation.png|300]]

## Doping parameters

To fully identify a doping process we need 3 parameters:

1) Dopant distribution $N(x)$ or $D(x)$ measured in $[\text{atoms}/cm^{3}]$
2) Total dose $Q(t)$ measured in $[\text{atoms}/cm^{2}]$. $Q(t) = \int_{0}^{\infty} N(x,t)  \, dx$ 
3) Junction depth $x_{j}$ measure in $nm$ or $\mu m$. The junction depth represent  the intersection of $N(x,t)$ with the **background concentration** $N_{B}$. Considering for example a n-type doped substrate (see the [[#^649cfb|CZ process]]), $x_{j}$ represents the depth at which the overall doping is neutral.

#todo add plot

## Ion implantation

Implantation consists in introducing desired atoms or impurities into the substrate in a controlled manner using a ionic beam.

A high voltage is used to accelerate the ionized dopants toward the substrate at sufficiently high speed and energies so that they can be *implanted* below the surface. (If the energy is too high we obtain the same effect of [[#Sputtering|sputtering]]). Thanks to the way the process is performed, it is possible to achieve an **instant on/instant off** control; this, with the help of *in situ* monitoring, can allow for a better control of the implanted dose.

### Implanter

![[implanter.png|700]]

The implanter is composed of multiple parts where the most important are highlighted in the picture. After the ions are emitted by the source, they are separated depending to their mass (**A**); this has both the advantage of filtering out unwanted species and allowing to select different dopants for different regions of the substrate.

After being accelerated, the beam passes through a beam trap/beam gate (**B**), which has the goal of filtering out those ions that got neutralized during the previous steps. This step is important for two reasons: the first one is that neutral atoms will not be deflected by the electric field of the scanners (**C**) and will end up bombarding unwanted spots; the second one, which will be more clear in the following, is that neutral dopants cannot be measured.

The scanners then move the beam to implant only the desired regions. The dose, finally, is measured with an integrator circuit (**D**) which measures a current which is proportional to the number of implanted ions according to the formula:

$$
Q = \int_{0}^{T} \frac{I}{ n \cdot q \cdot A} \, dt
$$

where $n$ is the number of charges per ion. 

## Gaussian approximation

Implantation can be studied as a random process which follows a Gaussian distribution: the more the dopant atoms penetrate into the substrate, the more random their path becomes. This can be represented in the following way: 

![[dopant distribution.png|500]]
The plot has the **depth** on the horizontal axis and the concentration of dopant on the vertical axis. The depth at which the maximum concentration (**peak concentration**) is reached, is called **range of implant** or **projected range** and the "width" (or more properly the standard deviation) of the distribution around it is called **vertical straggle**. As we will see later, increasing the range of implant increases the vertical straggle.

### Junction depth

Another important parameter of the implantation process, which is not shown in the plot above, is the junction depth, which is the depth at which the concentration of implanted dopant atoms equals the substrate background concentration of dopant atoms. It can be seen as the "line" between the *n* and the *p* parts.

![[junction depth.png|600]]

$C_{b}$ are the background doping and depending on the case we can have one or two junctions as we can see from the drawing. Keeping the energy constant we can change the position of the junctions by varying the dose, by changing the thickness of the mask and the substrate orientation (see [[#Channelling through lattice]]).

If we vary the energy properly we can "sweep" the gaussian to obtain a mostly constantly concentration.

## Control parameters

When planning an implantation process, there are multiple factors that have to be taken into consideration to achieve the desired results:

- **Ion energy**: controls the depth and shape of the implant. Higher energies will make the dopants penetrate deeper into the substrate but will also **increase the vertical straggle**; this means that if we want to implant deeper (with a single implantation, more on that later) we will also loose accuracy. Increasing the energy has also the effect of damaging the crystal more (consider that the process is similar to [[#Sputtering|sputtering]]).
- **Dose**: increasing the dose will, obviously, increase the concentration which, in turn, affects many device parameters, it's mechanical, chemical and optical properties.
- **Ion species**: changing the type of dopant species has multiple effects. The most obvious one is changing the doping type (n or p), but the type of dopant affects also the profile depth and shape: some atoms (e.g. $\ce{B}$) will have a higher projected range compared to others (e.g. $\ce{As}$) at the same implantation energy.
- **Mask**: the lithographic mask plays a very important role in implantation as we will see in more detail later. The main parameters of the mask that can be controlled are its **shape** and its **thickness**. A thicker mask will be able to protect the substrate from doping.
- **Annealing**: changing the annealing time or technique has a major impact on the success of the process.

## Annealing and activation

As stated before, when the atoms are implanted, they end up in random locations of the lattice but, for them to actually function as dopants, they need to be in **substitutional positions**. Moreover, the implantation process damages the crystalline structure, which has to be healed.

Both these problems can be solved with annealing, which consists in providing energy to the material to allow for the atoms to move in the "proper" places. This movement has also the **side effect** of causing diffusion of dopants and contaminants, which further reduces the resolution (the original Gaussian gets wider).

### Isothermal annealing

In isothermal annealing the whole wafer is heated uniformly and slowly so that it never gets out of thermal equilibrium. There are two different methods of performing this type of annealing process:

- **Furnace based**: the wafers are introduced in a furnace where they are heated; the process takes a long time (minutes or hours) and for this reason there is a large redistribution of dopants.
- **Rapid Thermal Annealing (RTA)**: in this case the wafers are heated by lamps and the heating process is dominated by electromagnetic radiation. The process is faster (seconds or minutes) and there is a smaller redistribution of charges.

### Adiabatic annealing

In adiabatic annealing the thermal equilibrium is not maintained because the wafers are heated with a high energy density in a small spot. We have two types of adiabatic annealing: **e-beam** and **laser**. In both cases the heat transfer is caused by radiation and lasts for a very short amount of time (milliseconds or seconds).

Notice that, even though the heating time is much smaller compared to the isothermal annealing, this **does not** imply that the process is faster. In this case in fact, only a small portion of the wafer is heated at any given time, so the process has be repeated for each spot that has to be annealed.

![[annealing.png|400]]

## Channelling through lattice

In a monocrystalline material there is a significant probability that the implanted ions trajectory is aligned with crystallographic planes of low Miller indices (which are the most used); this causes the dopants to move in unexpected ways. If the atom enters in a channel, it will encounter less "resistance" and thus travel deeper into the substrate.

![[channelling.png|500]]

In the plot below we can see that channelling affects different dopant species in different ways but, nevertheless, its effect is very strong.

![[channelling 2.png|400]]

To mitigate the effect of channelling there are three possible solutions, each with its advantages and drawbacks:

- **Implant into a damaged target**: the surface of the target can be damaged before the implantation process by bombarding it with  $\ce{Ar+}$ and make it more amorphous.
- **Implant through an amorphous layer**: similarly to the previous method, we could implant through a layer of  $\ce{SiO_2}$. This obviously requires two additional steps (deposition and removal of the oxide). This method has also the disadvantages of being only partially effective and difficult to implement.
- **Implant not aligned with the channel**: it is possible to angle the substrate compared to the implantation direction in order to reduce the effects of channelling. As visible in the picture below, a (110) crystal, tilted by few degrees, appears completely different.

![[tilted channel.png|400]]
Tilting the substrate has the advantage of being very easy and cheap but shadowing effects has to be considered. 

![[channelling shadow.png|300]]

## Sheet resistance

#todo 

## Implantation through a mask

As briefly discussed previously, the usage of a mask offers a big range of control over the implantation. Apart from simply protecting the masked regions in a binary way, masks can be used to change the range of implant even **outside** the wafer itself.

This is possible because part of the dopants will remain in the mask; the thicker the mask, the less dopant will reach the substrate. The dopant distribution will have the usual shape but it will be spread across the interface between the mask and the substrate.

![[fraction transmitetd.png|500]]

To calculate the part of dopant that reaches the substrate (the **fraction transmitted** $FT$) we can use the following formula:

$$
FT = \frac{\text{ dose in the substrate}}{\text{total dose}}= \frac{\int_{d}^{\infty}  N(x)\, dx}{\int_{0}^{\infty} N(x) \, dx }
$$

Where $N(x)$ is the dopant distribution seen previously.

The formula can be rewritten in terms of the **complementary error function** $\text{erfc}$:

$$
	FT = \frac{1}{2} \text{erfc}\left( \frac{d - R_{p}}{\Delta R_{p} \sqrt{ 2 }} \right)
$$
Where $R_{p}$ is the range of implant and $\Delta R_{p}$ is the vertical straggle. Since $\text{erfc}$ is a decreasing function, it's easy to see that increasing both the range of implant and the vertical straggle, increases the fraction transmitted.

#todo role of mask on FT

#todo screen oxides (why oxides and not lito mask?)

## Silicon on insulators (SOI) wafers

SOI wafers are a special type of wafers made to solve the problem of **parasitic transistors** in certain devices. What happens with classic wafers is that parts of devices can act as "unwanted" transistors and deteriorate the performance of the device itself. To solve this issue there is a special kind of wafer which has an oxide layer buried under the silicon device layer (the topmost part of the wafer). 
The oxide create an electrical separation between the two  $\ce{Si}$ layers, solving the issue described above.

There are multiple ways of fabricating SOI wafers.

### SIMOX

Simox stands for "Separation by IMplantation of OXygen". The process consists in implanting oxygen ions in a normal wafer in order to oxidize a buried layer.

### BESOI

This method is based on wafer bonding and thinning, the name stands for "Bond and Etchback Silicon On Insulator". In this technique, two wafers are bonded together; one or both of the wafers has an insulating oxide on the surface. 
After bonding, most of the top wafer is polished away, leaving a structure with a thin top silicon layer, a buried oxide and a full wafer below. 

### Smart Cut

#todo


![[Wet and dry etching]]