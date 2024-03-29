---
nextnote: 
author: Giacomo
authorlink: https://github.com/gamberoillecito
---
%% Declaration of the trace operator %%
$$
\DeclareMathOperator{\tr}{Tr}
$$
%% Declaration of the trace operator %%

# Definitions

As we already know the elementary unit o quantum information is the qubit, which is a linear combination of orthonormal basis defined in an Hilbert space 

$$
\ket{\psi}  = \alpha \ket{0}  + \beta \ket{1} , \quad |\alpha|^{2} + |\beta|^{2} = 1
$$

If the quantum state is completely defined, as for example in the case 

$$
\ket{\psi} = \frac{1}{\sqrt{ 2 }} \ket{0} + \frac{1}{\sqrt{ 2 }}\ket{1} 
$$

we refer to it as a **pure state**. In this case we could, in theory, exactly predict the evolution of the system. Since this case is ideal, we need a way to represent and study systems which are not completely known, these systems are said to be in a **mixed state**.

To be able to measure the "amount of information" in the quantum case we need to extend the concept of entropy to this case. This can be done by generalizing the Gibbs definition to obtain the **von Neumann entropy**: 

$$
S = -k_{B} \tr[\rho \ln\rho]
$$

Where $\tr$ is the **trace operator** and $\rho$ is the **density matrix** defined as follows 

$$
\rho = \sum_{j} p_{j}\ket{\psi_{j}} \bra{\psi_{j}} 
$$

## Outer product

The quantity $\ket{\psi_{j}}\bra{\psi_{j}}$ in the definition of the density matrix is called outer product. If we two vectors $\ket{v}$ and $\ket{w}$ in the inner product spaces $V$ and $W$ respectively, the outer product $\ket{w}\bra{v}$ is the linear operator from $V$ to $W$ defined by 

$$
(\ket{w} \bra{v} )(\ket{v'} ) \equiv \ket{w} \braket{ v | v' }  = \braket{ v | v' } ~\ket{w} 
$$

The expression $\braket{ v | v' } ~\ket{w}$ could denote that:

- The operator $\ket{w} \bra{v}$ acts on $\ket{v'}$
- The vector $\ket{w}$ is multiplied by the complex number $\braket{ v|v' }$

## Completeness relation

Let $\ket{i}$ be any orthonormal basis for the vector space $V$, so that any arbitrary vector $\ket{v}$ can be written as 

$$
\ket{v}  = \sum_{i} v_{i} \ket{i} 
$$

where $v_{i}$ is a complex number. Since $\braket{ i|v } = v_{i}$ we can rewrite the relation above as 

$$
\ket{v} = \sum_{i} v_{i}\ket{i} = \sum_{i} \ket{i} \braket{ i|v } =\left( \sum_{i} \ket{i} \bra{i}  \right) \ket{v} 
$$

which means that 

$$
\sum_{i} \ket{i} \bra{i} = \mathbb{I} \tag{Completeness relation}
$$

## Operator representation in the outer product notation

If $A$ is a linear operator from space $V$ to space $W$, $\ket{v_{i}}$ and $\ket{w_{i}}$ are orthonormal basis for $V$ and $W$, we can use the completeness relation to write the following 

$$
\displaylines{
\mathbb{I}_{w} = \sum_{j} \ket{w_{j}}  \bra{w_{j}} \\
\mathbb{I}_{v} = \sum_{i} \ket{v_{i}} \bra{v_{i}} 
}
$$

The operator $A$ can be written as follows 

$$
\displaylines{
A = \mathbb{I}_{w}~A~\mathbb{I}_{v}\\
A = \sum_{ij} \ket{w_{j}} \braket{ w_{j} | A | v_{i} } \bra{v_{i}} \\
A = \sum_{ij} \braket{ w_{j}|A | v_{i}} \ket{w_{j}} \bra{v_{i}}  
}
$$

$A$ will then have matrix element $\braket{ w_{j} | A | v_{i} }$ in the $i$th column and $j$th row.

## Trace

The trace of a square operator $A$ acting on a Hilbert space $\mathcal{H}$ is defined as 

$$
\tr[A] \equiv \sum_{i} \braket{ i | A |i } 
$$
where $\{\ket{i}\}$ is some complete and orthonormal basis for $\mathcal{H}$.

**The trace of $A$ can be written as the sum of its diagonal elements.**

### Properties of the trace operator

- **Cyclic**: $\tr[AB] = \tr[BA]$
- **Linear**: $\tr[z(A + B)] = z(\tr[A] + \tr[B])$
- **Invariant under unitary transformations**: $\tr[UAU^{\dagger}] = \tr[U^{\dagger}UA] = \tr[A]$
- **Independent on the basis**

## Density operator or density matrix

