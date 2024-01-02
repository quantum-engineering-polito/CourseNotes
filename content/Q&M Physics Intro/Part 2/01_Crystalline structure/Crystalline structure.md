---
nextnote: "[[Reciprocal lattice]]"
---

# Solid state physics

Solid state physics is the study of the state of the matter in which a large number of atoms ($\sim N_{A}$) are chemically bound to form an **ordered** form in the 3D space. We will have to deal with the forces between the atoms (the type of bonding) and the spatial ordering (the crystalline lattice).

We will not deal with amorphous materials.

## Single atoms

In single atoms electrons leave in radially symmetric potentials (orbitals) indicated by a number and a letter, such as 1s, 2s, 2p, etc.

The numbers represent the **principal quantum number** $n$ and the letters represent the **orbital angular momentum** $l$. We also have the **magnetic quantum number** $m$ ($-l \leq m \leq l$).

## Multiple atoms

If multiple single atoms are gradually brought closer to each other, we have an interaction between different orbitals which causes the **splitting** of energetic levels. This is, in turn, associated with the formation of **energy bands**.

#todo add plot and explain

## Types of bonding

- **Covalent**: the electrons are shared only between neighbouring atoms and the bond is typically directional.
- **Metallic**: the electrons are shared over many atoms and the bond is typically non directional.
- **Ionic**: the electrons are transferred from one atom to another because it is energetically favourable to do so, even if the overlapping is limited.

We also have weaker types of bonding:

- **Hydrogen**: similar to ionic bonding but without the actual donation of electrons. We have the formation of partially charged regions.
- **Van Der Waals**: #todo 

# Crystals and lattices

An ideal crystal has an infinite number of repetitions in 3 dimensions of the same structural unit. 

The crystalline structure is composed by the **lattice** and the **base**. The lattice describes the structural spatial unit and the base represents the real position of the atoms in the lattice.

![[basis_lattice.png|center|400]]

Since we are dealing with a periodic structure, what we "see" from position $\vec{r}$ is the same as what we see from position $\vec{r'}$. This means that we can apply a translation operator 

$$
\vec{r'} = \vec{r} + n_1 \vec{a}_{1} + n_2 \vec{a}_{2} + n_2 \vec{a}_{3} \qquad n_{i} \in \mathbb{Z}
$$

$\vec{a}_{1}, \vec{a}_{2}, \vec{a}_{3}$ are called **crystallographic axes**.

$\vec{T} = n_1 \vec{a}_{1} + n_2 \vec{a}_{2} + n_2 \vec{a}_{3}$ is the **translation operator** and it links every couple of lattice points.

The parallelepiped with edges $\vec{a}_{1}, \vec{a}_{2}, \vec{a}_{3}$ is called **unit cell**. The repetition of unit cells can cover the overall space.

The **primitive cell** is the unit cells with minimum volume.

$$
\mathbf{V}_0 = |\vec{a}_{1} \times \vec{a}_{2} \cdot \vec{a}_{3}|
$$

Since the choice of the vector $\vec{a}_{i}$ is not univocal, there is an infinite number of both unit and primitive cells. We are mostly interested in the **Wigner-Seitz cell**.

![[Crystals#Wigner-Seitz cell]]

## Miller indexes

![[Crystallography#Miller indices]]

