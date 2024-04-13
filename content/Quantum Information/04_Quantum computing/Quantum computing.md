---
nextnote: 
author: Giacomo
authorlink: https://github.com/gamberoillecito
---
# No-cloning theorem

The no-cloning theorem state that it is not possible to create a copy of an **unknown** quantum state. This statement can be proved using the following reasoning.

Suppose we have a copying machine with two slots. The machine starts with a pure quantum state $\ket{\psi}$ in the *data slot* that we want to copy to the *target slot* which, initially, is in the pure state $\ket{s}$. At the beginning of the experiment the machine is in the state 

$$
\ket{p} \otimes  \ket{s} 
$$

If the copying procedure can be described by some unitary evolution $U$, we can write the following: 

$$
\ket{\psi}  \otimes \ket{s} \overset{ U }{ \longrightarrow } U\big( \ket{\psi} \otimes \ket{s}  \big) = \ket{\psi} \otimes \ket{\psi} 
$$

If we apply the copying procedure to two particular pure states $\ket{\psi}$ and $\ket{\varphi}$ we would have 

$$
\displaylines{
U(\ket{\psi} \otimes \ket{s} ) = \ket{\psi} \otimes \ket{\psi} \\
U(\ket{\varphi} \otimes \ket{s} ) = \ket{\varphi} \otimes \ket{\varphi} \\
\Updownarrow \\
U \ket{\psi s} = \ket{\psi \psi} \\
U \ket{\varphi s}  = \ket{\varphi \varphi}\\
\\
}
$$

If we take the inner product of these two equation we get 

$$

\displaylines{

\Braket{ \varphi s | U^{-1} U | \psi s } = \braket{ \varphi\varphi | \psi \psi }\\ 
\braket{ \varphi s | \psi s } = \braket{ \varphi | \psi } \braket{ \varphi | \psi }\\
\braket{ \varphi | \psi } \cancelto{ 1 }{ \braket{ s | s }  } = \braket{ \varphi | \psi } \braket{ \varphi | \psi } 
\\
\Downarrow \\
\braket{ \psi|\varphi } = \big( \braket{ \psi | \varphi }  \big) ^{2}
}
$$

Since $x = x^{2}$ is satisfied only for $x=0$ and $x= 1$ we must have either $\ket{\psi} = \ket{\varphi}$ or $\ket{\psi} \perp \ket{\varphi}$. This shows that the device **can only clone states that are orthogonal to each other**.

Even though the proof holds only for unitary operators, it can be shown that the results remain valid even for the general case.

