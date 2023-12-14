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
V_0 = |\vec{a}_{1} \times \vec{a}_{2} \cdot \vec{a}_{3}|
$$

Since the choice of the vector $\vec{a}_{i}$ is not univocal, there is an infinite number of both unit and primitive cells. We are mostly interested in the **Wigner-Seitz cell**.

![[Crystals#Wigner-Seitz cell]]

## Miller indexes

![[Crystallography#Miller indices]]

# Reciprocal lattice

Let's start from studying the simple case of a 1D crystal whose atoms are arranged in a line at a distance $a$ (**period**) from each other.

#todo improve drawing

![[1dCrystal.png]]
Let's now introduce a function $\rho$ that has the same periodicity of the crystal:

$$
\rho(x + ma) = \rho(x) \qquad m \in \mathbb{Z}
$$

If we write the Fourier expansion of $\rho$ we get

$$
\rho(x) = \sum_{n} \rho_{n} e^{ ikx } = \sum_{n} \rho_{n} e^{ i \frac{2\pi}{a} n x }
$$

We want to demonstrate that #todo ???:

$$
\begin{align}
\rho(x + ma) &= \sum_{n} \rho_{n} e^{ i \frac{2\pi}{a} n (x + ma) }  \\
&= \sum_{n} \rho_{n} e^{ i \frac{2\pi}{a}nx} ~ \overbrace{ e^{ i 2\pi m n } }^{ 1 } \\
&= \sum_{n} \rho _{n} e^{ i \frac{2\pi}{a} nx } \\
&= \rho(x)
\end{align}
$$

So if we have a periodic function its Fourier expansion can be written only for certain values of $k_{n} = 2n\pi/a$.

## 3D case

This can be generalized in 3 dimensions as follows:

$$
\rho(\vec{r} + \vec{r}_{n}) = \rho(\vec{r})
$$

with $\vec{r}_n = n_1 \vec{a}_{1} + n_2 \vec{a}_{2} + n_3 \vec{a}_{3}$

Similarly to before, the Fourier series can be written as 

$$
\rho(\vec{r}) = \sum_{\vec{G}} = \rho_{\vec{G}} e^{ i \vec{H} \cdot \vec{r} }
$$

with 

$$
\vec{G} \cdot \vec{r}_{n} = 2\pi m \qquad m \in \mathbb{Z}
$$

Similarly to the demonstration above we can write 

$$
\rho(\vec{r} + \vec{r}_{n}) = \sum_{\vec{G}} \rho_{\vec{G}} e^{ i \vec{G} (\vec{r} + \vec{r}_{n}) } = \sum_{\vec{G}} \rho_{\vec{G}} e^{ i  \vec{G} \cdot \vec{r} } ~  e^{ i \vec{G} \cdot \vec{r}_{n} }
$$
If
$$\vec{G}\cdot \vec{r}_{n} = 2\pi m \tag{1}$$
the last exponential becomes $=1$ and we get:

$$
\rho(\vec{r} + \vec{r}_{n}) =\sum_{\vec{G}} \rho_\vec{G} ~ e^{ i \vec{G} \cdot \vec{r} } = \rho(\vec{r})
$$

Again, the sum is not on every possible $\vec{G}$ wave vector.

## Finding a base

It can be useful to define a base $(\vec{g}_{1}, \vec{g}_{2}, \vec{g}_{3})$ to express $\vec{G}$:

$$
\vec{G} = h\vec{g}_{1} + k \vec{g}_{2} + l\vec{g}_{3} \qquad h,k,l \in \mathbb{Z}
$$

We now need to find $h,k,l$ that satisfy the condition $(1)$ for each $\vec{r}_{n} = n_1 \vec{a}_{1} + n_2 \vec{a}_{2} + n_3 \vec{a}_{3}$.

If we take the particular case in which $\vec{r}_{n}$ is parallel to $\vec{a}_{1}$:

$$
\vec{r}_{n} = n_1 \vec{a}_{1} \qquad (n_2 = n_3 = 0)
$$

we get 

$$
\vec{G} \cdot \vec{r}_{n} = hn_1 ~ \vec{g}_{1} \cdot \vec{a}_{1} + k n_2 ~ \vec{g}_{2} \cdot \vec{a}_{2} + l n_3 ~ \vec{g}_{3} \cdot \vec{a}_{3} = 2 \pi m
$$

which is true when 

$$
\begin{cases}
\vec{g}_{1} \cdot \vec{a}_{1} = 2 \pi \\
\vec{g}_{2} \cdot \vec{a}_{1} = 0 \\
\vec{f}_{3} \cdot \vec{a}_{1} = 0
\end{cases}
$$
The same can be done for $\vec{r}_{n} = n_2 \vec{a}_{2}$ and $\vec{r}_{n} = n_3 \vec{a}_{3}$ getting the condition: 

$$
\vec{g}_{i} \cdot \vec{a}_{j} = 2 \pi \delta_{ij}
$$
The vectors $\vec{G}$ are the **vectors of the reciprocal lattice** and $\vec{g}_{i}$ are the **primitive vectors**.

Dimensionally $G = [\text{length}^{-1}]$ and thus the wave vector $\vec{g}_{1}$ (for example) is **perpendicular** to $\vec{a}_{2}$ and $\vec{a}_{3}$. We can see that there is an **inverse proportionality** between the lengths of the vectors: 

$$
\vec{g}_{1} \cdot \vec{a}_{1} = 2 \pi \implies |\vec{g}_{1}| \cdot |\vec{a}_{1}| \cos(\alpha) = 2 \pi \implies |\vec{g}_{1}| = \frac{2\pi}{|\vec{a}_{1}|} \cos(\alpha)
$$
where $\alpha$ is the angle between $\vec{g}_{1}$ and $\vec{a}_{1}$.

## Volume of the reciprocal lattice

Given $\mathbf{V} = \vec{a}_{1} \cdot (\vec{a}_{2} \times \vec{a}_{3})$ the volume of the direct lattice we can find that the volume of the reciprocal lattice is 

$$\mathbf{V}_{rec} = \vec{g}_{1} \cdot (\vec{g}_{2} \times \vec{g}_{3}) = \dots = \frac{(2\pi)^{3}}{\mathbf{V}}$$

