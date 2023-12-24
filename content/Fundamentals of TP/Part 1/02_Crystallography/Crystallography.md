Before analysing in more detail the crystals it is useful to have a general overview of the 3 different types of solids we can have.

# Types of solids

| Monocrystal          | Polycristal          | Amorphous          |
| -------------------- | -------------------- | ------------------ |
| ![[monocrystal.png]] | ![[polycristal.png]] | ![[amorphous.png]] |

In a monocrystal all the atoms are arranged on a common **lattice** structure, in a polycrystal there are multiple lattices of the same type oriented differently to one another (each lattice is called **grain**), the interface between two grain is called **Grain boundary**. In amorphous material, on the other hand, the atoms are placed randomly in space.

While we will analyse mostly monocrystals, it is important to note that all three types are useful in practical applications, such as the creation of integrated devices.

# Crystal structure

## Bravais lattice

There are only 14 unique lattices possible in 3 dimensions called **Bravais lattice**. We are mostly interested in studying the **cubic** lattice which comes in three forms: ^56093c

| Simple Cubic  | Body Centered Cubic (BCC)                    | Face Centered Cubic (FCC)                          |
| ------------- | -------------------------------------------- | -------------------------------------------------- |
| ![[cube.png]] | ![[bodycenteredcubic.png]]                   | ![[faceCentereCubic.png]]                          |
|               | the blue atom is in the center of the cube | the blue atoms are on the faces of the main cube |

^329279

Each lattice has a specific **lattice parameter** $a_{0}$ which represents the length of the cube side. ^962ccb


## Silicon lattice

Crystalline structure of $Si$ belongs to the family of cubic crystals and is the result of the interpenetration of two FCC where one sub-lattice is moved away from the other along the diagonal of the cube of an amount corresponding to $\frac{1}{4}$ of its length. Every atom is surrounded by 4 atoms placed at the same distance at the corners of a tetrahedron.

<div class="sketchfab-embed-wrapper"> <iframe title="Diamond Lattice Structure" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/b0378af5ed874c8780b11c3a76d07ace/embed?dnt=1"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/diamond-lattice-structure-b0378af5ed874c8780b11c3a76d07ace?utm_medium=embed&utm_campaign=share-popup&utm_content=b0378af5ed874c8780b11c3a76d07ace" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Diamond Lattice Structure </a> by <a href="https://sketchfab.com/emanuelemessina?utm_medium=embed&utm_campaign=share-popup&utm_content=b0378af5ed874c8780b11c3a76d07ace" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Emanuele Messina </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=b0378af5ed874c8780b11c3a76d07ace" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>

## Miller indices

From what we will see later, the same material, with the same lattice structure can behave very differently depending on how it is cut (for thin films we are interested in the surface properties). 
To be able to describe different surfaces we can use Miller indices to identify the cut plane. 
The method to find those indices is as follows:

1) Find the points where the cutting plane intercepts the $x,y,z$ axes, in this case $(2, -3, 4)$ 
2) Write the reciprocal of the numbers $(1/2, -1/3, 1/4)$
3) Reduce the list to the smallest integer $(6/12, -4/12, 3/12) \implies (6, -4, 3)$
4) Usually negative numbers are represented with a bar, the Miller index of this plane is $(6\bar{4}3)$.

![[millerIndeces.png|200]]

## Surface behavior

The way the the crystal is cut influences in a very significant way the properties of the material. The cut can in fact change the number of **dangling bonds** on the surface, thus changing how reactive the surface can be (more dangling bonds speed up the oxidation for example). 
In the following table it is possible to see how different cuts change the surface properties of the same material.

| 111             | 110             | 100             |
| --------------- | --------------- | --------------- |
| ![[fcc111.png]] | ![[fcc110.png]] | ![[fcc100.png]] |

# Crystalline defects

## Point defects

| Type                    | Explanation                                             | Image                     |
| ----------------------- | ------------------------------------------------------- | ------------------------- |
| Self interstitial       | There is an extra atom of the right element             | ![[selfInterstitial.png]] |
| Interstitial            | There is an extra atom of the wrong element             | ![[interstitial.png]]     |
| Vacancy                 | An atom is missing                                      | ![[vacancy.png]]          |
| Substitutional impurity | There is a wrong atom in the right place of the lattice | ![[substitution.png]]     |

## Line defects

The main line defect we will consider is **edge dislocation** which consists in the insertion of an extra half plane of atoms in the lattice. This half plane generates **compression and tension stresses**.

![[edgeDislocation.png|300]]

It is important to notice that dislocations can **move** across the material due to thermal or mechanical stresses.

## Surface defects

The main surface defect we will consider are **grain boundaries** which are the interfaces between crystals with different orientations. The atoms on these boundaries tend to be loosely bound and thus more reactive.
Lower temperature during the deposition process tend to create smaller grains and thus many boundaries, higher temperatures instead produce larger grains and less boundaries.

![[grainBoundary.png|200]]

## Volume defects

Impurities have an intrinsic solid solubility in the host crystal which varies with temperature; usually solid solubility decreases with decreasing temperature, so if impurities are introduced at maximum concentration for a certain T, when T is lowered some impurities (the excess respect to the solid solubility at that temperature) can precipitate and form local conglomerates. The volume of the crystal in that region can drastically change and this causes **volume dislocations**.

![[volumeDislocation.png|200]]

---

Read Next [[Clean Room Technology]]