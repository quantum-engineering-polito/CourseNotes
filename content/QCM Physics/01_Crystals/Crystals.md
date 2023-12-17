# Crystals

![[Crystallography#Types of solids]]

## Bravais lattice

A **Bravais lattice** can be defined in two ways. The informal definition states that a lattice is a Bravais lattice if any point is equivalent to any other in terms of symmetry and relations to the other point (i.e. if I am on a point and then move to another point I cannot tell the difference).

The mathematical definition instead is as follows

$$
\displaylines{
\bar{R_{n}} = n_{1}\bar{a_{1}} + n_{2}\bar{a_{2}} + n_{3}\bar{a_{3}} \\
\bar{a_{1}}, \bar{a_{2}}, \bar{a_{3}} \quad \text{are base vectors}\\
n_{1}, n_{2}, n_{3}= 0, \pm 1, \pm 2,\, \dots
} 
$$

### Primitive cell unit

A primitive cell unit is defined as any volume of space which, when translated through all the vectors of the Bravais lattice, fill space without overlap and without leaving voids.

![[primitiveUnitCellMarks.png|300]]

Primitive cells must contain only one lattice point; it the point is on the edge of the cell only a fraction of it is considered (if a point is shared between 4 cells, each cell will have 1/4 of it).

### Wigner-Seitz cell

Wigner-Seitz cell is a special choice of primitive unit cell: region of points closer to a given lattice point than to any other. 

How to draw it in 2D: ^69cf07
1) Find the point for which you want to draw the cell.
2) Draw lines that connect it to all its nearest neighbours.
3) For each of these lines draw a perpendicular line(*) that passes through its mid point.
4) The area delimited by the lines (*) is the Wigner-Seitz cell.

![[wignerSeitzCell2.png|300]]

### Bravais lattice

![[Crystallography#Bravais lattice]]
It should be noted that BCC and FCC are not primitive because they contain more than one point (the primitive cell wouldn't show the cubic symmetry).

## Crystal structure

Bravais lattice is an abstract concept which is useful to characterize a crystal. The crystal itself is made out of a Bravais lattice and a **basis**. The basis can be one atom or a molecule. 

![[fcccrystalOneAtom.png|300]]

![[fullereneCrystal.png|300]]

In the images above we can see that the unit of repetition (the basis) is an atom in the first case and a molecule in the second, but the lattice is the same. 
Changing the basis changes the **coordination number** which is the number of atoms connected to a specific atom.

### Silicon crystal structure

![[silicon structure.png|300]]

In the image above it is possible to see that the unit of repetition in this case is made of the two red atoms and that the coordination number is 4. The atoms positions in the primitive cell are expressed in **fractional coordinates** which means that they are expressed as a fraction of the [[Crystallography#^962ccb|lattice parameter]] *a*.

## Reciprocal lattice

Let's start with a Bravais lattice

$$
\displaylines{
\bar{R_{n}} = n_{1}\bar{a_{1}} + n_{2}\bar{a_{2}} + n_{3}\bar{a_{3}} \\
n_{1}, n_{2}, n_{3}= 0, \pm 1, \pm 2,\, \dots
} 
$$

We define the **reciprocal lattice** $\bar{G}$ such as 

$$
\bar{G} \bar{R_{n}} = 2 m \pi \qquad m = 0, \pm 1, \pm 2 \, \dots
$$

note that the number of $\bar{G}$ vectors is infinite and that since $\bar{R_{n}}$ is in meters $[m]$ $\bar{G}$ is $[m]^{-1}$ which is a reciprocal space.

We need to find a base for $\bar{G}$ in the reciprocal space that satisfies the following condition: 

$$
\bar{a_{i}} \cdot \bar{g_{j}} = 2 \pi \delta_{ij} \quad \delta_{ij} = \begin{cases}
1 \quad i = j \\ \\
0 \quad i \neq j
\end{cases}
$$

where $\bar{g_{j}}$ are the base vectors in the reciprocal space and $\bar{a_{i}}$ are the base vectors in the direct space.

Since we can find $g_{1}, g_{2}, g_{3}$ given $a_{1}, a_{2}, a_{3}$ we can write 

$$
\bar{G} = h\bar{g_{1}} + k \bar{g_{2}} + l \bar{g_{3}} \quad h,k,l = 0, \pm 1, \pm 2\, \dots
$$

which is again a Bravais lattice.

### Example in 2D

![[reciprocal lattice ex 2D.svg|400]]


$$
\bar{R_{n}} = n_{1} \bar{a_{1}} + n_{2} \bar{a_{2}}
$$

We can calculate the base vectors of the reciprocal space using the constraints given above.

$$
\displaylines{
\bar{g_{1}}\bar{a_{1}} = 2 \pi \\
\bar{g_{1}} \bar{a_{2}} = 0 \implies \bar{g_{1}} \perp \bar{a_{2}} \\
\bar{g_{2}} \bar{a_{1}} = 0 \implies \bar{g_{2}} \perp \bar{a_{1}} \\
\bar{g_{2}} \bar{a_{2}} = 2 \pi \\
\Downarrow \\
\begin{cases}
g_{1} = \frac{2 \pi}{a_{1} \cdot \cos(90^\circ)} = \frac{2 \pi} {a_{1}} \\
g_{2} = \frac{2 \pi}{a_{2} \cdot \cos(90^\circ)} = \frac{2 \pi} {a_{2}}
\end{cases}
}
$$

We can than draw the Wigner-Seitz cells for the two lattices. The WS cell of the reciprocal space is called **Brillouin zone**.

### Example: electrostatic potential

The electrostatic potential in a crystal is periodic: 

$$
V(\bar{r}) = V(\bar{r} + \bar{R_{n}}) \qquad (1)
$$

We will use the generic function $f()$ instead of $V()$.

$$
\displaylines{
f(\bar{r}) \overset{ Fourier }{ = } \sum_{\bar{k}} c_{\bar{k}} e^{ i \bar{k} \bar{r} } \qquad (2) \\\\

\begin{align} \\
f(\bar{r}) &\overset{ (1) }{=} f(\bar{r} + \bar{R_{n}}) \\
& \overset{ (2) }{ = } \sum_{\bar{k}} c_{\bar{k}} e^{ i \bar{k}(\bar{r} + \bar{R_{n}}) } \\
& =  \sum_{\bar{k}} c_{\bar{k}} e^{ i \bar{k} \bar{r} } e^{ i \bar{k} \bar{R_{n}} } \\
& \overset{ (1) }{ = } \sum_{\bar{k}} c_{\bar{k}} e^{ i \bar{k} \bar{r} } && \implies e^{ i \bar{k} \bar{r} } = 1  \\
& && \implies  \bar{k} \bar{R_{n}} = 2 \pi m  \\
& &&\implies \bar{k} \equiv \bar{G}
\end{align}
}
$$

# Defects in crystalline solids

We are interested in studying defects in crystals because some of them (point defects in particular) are used in quantum engineering to achieve desired results. Doping for example is a kind of point defect.

## Non ionic crystals defects

In the following table it is possible to see some kinds of point defects that can affect non ionic crystals (crystals made of one type of atom only).

![[Crystallography#Point defects]]

## Ionic crystals defects

In ionic crystal (made of two kinds of atoms, one positive ion and one negative), there are two common defects.

| Schottky         | Frenkel |
| ---------------- | ------- |
| ![[shottky.png]] |   ![[frenkel.png]]      |

The Schottky defects correspond to a missing cation/anion pair while Frenkel defects correspond to a vacancy and a nearby interstitial of the same ion.

## Defects formation energy

We would expect no defects at thermodynamic equilibrium but this is not the case because forming defects increases the entropy which stabilizes the system (?).

## Pairs of point defects

In ionic crystals the charge is carried not by electrons, but by the ions themselves; this would be extremely difficult to achieve in a perfect crystal but can happen easily in the presence of vacancies which can allow the motion of units of positive charge.

![[vacancy motion.png|600]]

## Color centers

Alkali-alide crystals are transparent throughout the visible region of the spectrum. But may become coloured in presence of defects.

### F-centers

#todo

---

Read Next [[Models]]